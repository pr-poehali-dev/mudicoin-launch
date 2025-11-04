import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(0);

    const matrixChars = '01';

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(10, 14, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF41';
      ctx.font = '15px "Press Start 2P"';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(drawMatrix, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 2) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-primary mb-2 pixel-text tracking-wider">
            MUDICOIN
          </h1>
          <p className="text-xs md:text-sm text-primary/80 pixel-text mt-4">
            8-BIT PIXEL MEMECOIN
          </p>
        </div>

        <div className="mb-12 relative" style={{ perspective: '1200px' }}>
          <div
            className="w-48 h-48 md:w-64 md:h-64 relative mx-auto"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(20deg) rotateY(${rotation}deg)`,
            }}
          >
            {[...Array(12)].map((_, zIndex) => {
              const voxels: JSX.Element[] = [];
              const radius = 80;
              const voxelSize = 8;
              const centerZ = zIndex * 4 - 24;
              
              for (let angle = 0; angle < 360; angle += 15) {
                const distance = radius - Math.abs(centerZ) * 0.5;
                if (distance > 20) {
                  const x = distance * Math.cos((angle * Math.PI) / 180);
                  const y = distance * Math.sin((angle * Math.PI) / 180);
                  
                  const brightness = 1 - Math.abs(centerZ) / 60;
                  
                  voxels.push(
                    <div
                      key={`voxel-${zIndex}-${angle}`}
                      className="absolute"
                      style={{
                        width: `${voxelSize}px`,
                        height: `${voxelSize}px`,
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: `translateZ(${centerZ}px)`,
                        backgroundColor: '#00FF41',
                        opacity: brightness,
                        boxShadow: `0 0 ${10 * brightness}px rgba(0, 255, 65, ${0.8 * brightness})`,
                      }}
                    />
                  );
                }
              }
              
              return (
                <div
                  key={`layer-${zIndex}`}
                  className="absolute inset-0"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {voxels}
                </div>
              );
            })}
            
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: 'translateZ(0px)',
                transformStyle: 'preserve-3d',
              }}
            >
              {[
                [1,1,1,0,0,0,1,1,1],
                [1,1,1,1,0,1,1,1,1],
                [1,1,1,1,0,1,1,1,1],
                [1,0,1,1,0,1,1,0,1],
                [1,0,0,1,0,1,0,0,1],
                [1,0,0,1,0,1,0,0,1],
                [1,0,0,0,0,0,0,0,1],
              ].map((row, rowIndex) => (
                <div key={`m-row-${rowIndex}`} className="absolute" style={{ top: `${rowIndex * 8 + 40}px`, left: '50%', transform: 'translateX(-50%)' }}>
                  {row.map((pixel, colIndex) => 
                    pixel === 1 ? (
                      <div
                        key={`m-pixel-${rowIndex}-${colIndex}`}
                        className="inline-block"
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#00FF41',
                          boxShadow: '0 0 15px rgba(0, 255, 65, 1)',
                          transform: 'translateZ(30px)',
                        }}
                      />
                    ) : (
                      <div key={`m-space-${rowIndex}-${colIndex}`} className="inline-block" style={{ width: '8px', height: '8px' }} />
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl px-4">
          <Button
            className="pixel-button h-14 md:h-16 text-xs md:text-sm hover:scale-105 transition-transform"
            variant="default"
          >
            CLAIM
          </Button>
          <Button
            className="pixel-button h-14 md:h-16 text-xs md:text-sm hover:scale-105 transition-transform"
            variant="default"
          >
            FARMING
          </Button>
          <Button
            className="pixel-button h-14 md:h-16 text-xs md:text-sm hover:scale-105 transition-transform"
            variant="default"
          >
            STAKELAND
          </Button>
          <Button
            className="pixel-button h-14 md:h-16 text-xs md:text-sm hover:scale-105 transition-transform"
            variant="default"
          >
            BUY
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[8px] md:text-xs text-primary/60 pixel-text">
            &gt; ENTER THE MATRIX &lt;
          </p>
        </div>
      </div>

      <style>{`
        .pixel-text {
          font-family: 'Press Start 2P', monospace;
          text-shadow: 2px 2px 0px rgba(0, 255, 65, 0.5);
          letter-spacing: 0.1em;
        }

        .pixel-button {
          font-family: 'Press Start 2P', monospace;
          border: 3px solid hsl(var(--primary));
          box-shadow: 
            0 0 10px rgba(0, 255, 65, 0.5),
            inset 0 0 10px rgba(0, 255, 65, 0.2);
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.8);
        }

        .pixel-button:hover {
          box-shadow: 
            0 0 20px rgba(0, 255, 65, 0.8),
            inset 0 0 20px rgba(0, 255, 65, 0.4);
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Index;