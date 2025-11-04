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

        <div className="mb-12 relative" style={{ perspective: '1000px' }}>
          <div
            className="w-48 h-48 md:w-64 md:h-64 relative"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotation}deg) rotateX(15deg)`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {[...Array(5)].map((_, layerIndex) => (
                  <div
                    key={layerIndex}
                    className="absolute inset-0 border-4 border-primary"
                    style={{
                      transform: `translateZ(${layerIndex * 8}px)`,
                      opacity: 1 - layerIndex * 0.15,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl md:text-8xl font-bold text-primary pixel-text">
                        M
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
