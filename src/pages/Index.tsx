import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface PixelShape {
  id: number;
  x: number;
  y: number;
  type: 'square' | 'triangle' | 'circle' | 'coin';
  size: number;
  speed: number;
  rotation: number;
}

const Index = () => {
  const [shapes, setShapes] = useState<PixelShape[]>([]);

  useEffect(() => {
    const initialShapes: PixelShape[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      type: ['square', 'triangle', 'circle', 'coin'][Math.floor(Math.random() * 4)] as PixelShape['type'],
      size: Math.random() * 30 + 20,
      speed: Math.random() * 0.3 + 0.1,
      rotation: Math.random() * 360,
    }));
    setShapes(initialShapes);

    const interval = setInterval(() => {
      setShapes(prevShapes =>
        prevShapes.map(shape => ({
          ...shape,
          y: (shape.y + shape.speed) % 110,
          rotation: (shape.rotation + shape.speed * 50) % 360,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const renderShape = (shape: PixelShape) => {
    const baseStyle = {
      position: 'absolute' as const,
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      transform: `rotate(${shape.rotation}deg)`,
      opacity: 0.15,
      pointerEvents: 'none' as const,
    };

    switch (shape.type) {
      case 'square':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              backgroundColor: '#00FF41',
              border: '2px solid #00FF41',
              boxShadow: '0 0 10px rgba(0, 255, 65, 0.3)',
            }}
          />
        );
      case 'triangle':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid #00FF41`,
              filter: 'drop-shadow(0 0 10px rgba(0, 255, 65, 0.3))',
            }}
          />
        );
      case 'circle':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: '3px solid #00FF41',
              boxShadow: '0 0 10px rgba(0, 255, 65, 0.3)',
            }}
          />
        );
      case 'coin':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              border: '4px solid #00FF41',
              boxShadow: '0 0 15px rgba(0, 255, 65, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: '#00FF41',
              fontSize: `${shape.size / 3}px`,
            }}
          >
            M
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        {shapes.map(renderShape)}
      </div>
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b-4 border-primary">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary" style={{ boxShadow: '0 0 10px rgba(0, 255, 65, 0.6)' }} />
            <span className="text-sm md:text-base font-bold">MUDICOIN</span>
          </div>
          <Button className="text-[10px] md:text-xs px-4 py-2 bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/90" style={{ boxShadow: '4px 4px 0px rgba(0, 255, 65, 0.4)' }}>
            BUY
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ textShadow: '4px 4px 0px rgba(0, 255, 65, 0.3)' }}>
                ONE MUDI
                <br />
                TO RULE
                <br />
                THEM ALL
              </h1>
            </div>
            <div className="w-16 h-1 bg-primary mx-auto" />
            <p className="text-[10px] md:text-xs text-primary/80 max-w-xl mx-auto leading-relaxed">
              8-BIT PIXEL MEMECOIN
              <br />
              RETRO GAMING BLOCKCHAIN
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="text-xs px-8 py-6 bg-primary text-primary-foreground border-4 border-primary hover:bg-primary/90" style={{ boxShadow: '6px 6px 0px rgba(0, 255, 65, 0.4)' }}>
                START
              </Button>
              <Button size="lg" variant="outline" className="text-xs px-8 py-6 border-4 border-primary bg-background hover:bg-primary/10" style={{ boxShadow: '6px 6px 0px rgba(0, 255, 65, 0.4)' }}>
                INFO
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30 border-y-4 border-primary/30 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-4 border-primary/50 hover:border-primary transition-colors" style={{ boxShadow: '8px 8px 0px rgba(0, 255, 65, 0.2)' }}>
              <div className="w-12 h-12 bg-primary mb-4" style={{ boxShadow: '0 0 15px rgba(0, 255, 65, 0.6)' }} />
              <h3 className="text-sm md:text-base font-bold mb-3">FAIR</h3>
              <p className="text-[8px] md:text-[10px] text-primary/70 leading-relaxed">
                100% COMMUNITY
                <br />
                NO PRESALE
              </p>
            </Card>

            <Card className="p-6 bg-card border-4 border-primary/50 hover:border-primary transition-colors" style={{ boxShadow: '8px 8px 0px rgba(0, 255, 65, 0.2)' }}>
              <div className="w-12 h-12 bg-primary mb-4" style={{ boxShadow: '0 0 15px rgba(0, 255, 65, 0.6)' }} />
              <h3 className="text-sm md:text-base font-bold mb-3">SECURE</h3>
              <p className="text-[8px] md:text-[10px] text-primary/70 leading-relaxed">
                AUDITED CONTRACT
                <br />
                LOCKED LIQUIDITY
              </p>
            </Card>

            <Card className="p-6 bg-card border-4 border-primary/50 hover:border-primary transition-colors" style={{ boxShadow: '8px 8px 0px rgba(0, 255, 65, 0.2)' }}>
              <div className="w-12 h-12 bg-primary mb-4" style={{ boxShadow: '0 0 15px rgba(0, 255, 65, 0.6)' }} />
              <h3 className="text-sm md:text-base font-bold mb-3">FAST</h3>
              <p className="text-[8px] md:text-[10px] text-primary/70 leading-relaxed">
                INSTANT TX
                <br />
                LOW FEES
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="tokenomics" className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center" style={{ textShadow: '4px 4px 0px rgba(0, 255, 65, 0.3)' }}>
            TOKENOMICS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-secondary border-4 border-primary/30" style={{ boxShadow: '4px 4px 0px rgba(0, 255, 65, 0.2)' }}>
                <span className="text-[10px] md:text-xs font-semibold">SUPPLY</span>
                <span className="text-xs md:text-sm font-bold">1B</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-secondary border-4 border-primary/30" style={{ boxShadow: '4px 4px 0px rgba(0, 255, 65, 0.2)' }}>
                <span className="text-[10px] md:text-xs font-semibold">LP</span>
                <span className="text-xs md:text-sm font-bold">80%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-secondary border-4 border-primary/30" style={{ boxShadow: '4px 4px 0px rgba(0, 255, 65, 0.2)' }}>
                <span className="text-[10px] md:text-xs font-semibold">REWARDS</span>
                <span className="text-xs md:text-sm font-bold">15%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-secondary border-4 border-primary/30" style={{ boxShadow: '4px 4px 0px rgba(0, 255, 65, 0.2)' }}>
                <span className="text-[10px] md:text-xs font-semibold">MARKETING</span>
                <span className="text-xs md:text-sm font-bold">5%</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 border-8 border-primary" style={{ boxShadow: '0 0 30px rgba(0, 255, 65, 0.4)' }}>
                <div className="absolute inset-8 border-4 border-primary/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold mb-2" style={{ textShadow: '2px 2px 0px rgba(0, 255, 65, 0.5)' }}>
                      MUDI
                    </div>
                    <div className="text-[8px] md:text-[10px] text-primary/70">TOKEN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-16 px-4 bg-secondary/30 border-y-4 border-primary/30 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center" style={{ textShadow: '4px 4px 0px rgba(0, 255, 65, 0.3)' }}>
            ROADMAP
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-4 border-primary bg-primary flex items-center justify-center text-background font-bold text-xs" style={{ boxShadow: '0 0 15px rgba(0, 255, 65, 0.6)' }}>
                  ✓
                </div>
                <div className="w-1 h-full bg-primary/30 mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="text-sm md:text-base font-bold mb-2">PHASE 1</h3>
                <p className="text-[8px] md:text-[10px] text-primary/70 leading-relaxed">LAUNCH + LIQUIDITY</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-4 border-primary bg-background flex items-center justify-center font-bold text-xs">
                  2
                </div>
                <div className="w-1 h-full bg-primary/30 mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="text-sm md:text-base font-bold mb-2">PHASE 2</h3>
                <p className="text-[8px] md:text-[10px] text-primary/70 leading-relaxed">CEX + PARTNERSHIPS</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-4 border-primary/50 bg-background flex items-center justify-center font-bold text-xs text-primary/50">
                  3
                </div>
                <div className="w-1 h-full bg-primary/30 mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="text-sm md:text-base font-bold mb-2 text-primary/70">PHASE 3</h3>
                <p className="text-[8px] md:text-[10px] text-primary/50 leading-relaxed">NFT + STAKING</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-4 border-primary/50 bg-background flex items-center justify-center font-bold text-xs text-primary/50">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold mb-2 text-primary/70">PHASE 4</h3>
                <p className="text-[8px] md:text-[10px] text-primary/50 leading-relaxed">METAVERSE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6" style={{ textShadow: '4px 4px 0px rgba(0, 255, 65, 0.3)' }}>
            JOIN US
          </h2>
          <p className="text-[10px] md:text-xs text-primary/70 mb-10 leading-relaxed">
            &gt; ENTER THE MATRIX &lt;
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-[10px] px-6 py-4 bg-secondary border-4 border-primary hover:bg-primary/20" style={{ boxShadow: '4px 4px 0px rgba(0, 255, 65, 0.3)' }}>
              TWITTER
            </Button>
            <Button size="lg" className="text-[10px] px-6 py-4 bg-secondary border-4 border-primary hover:bg-primary/20" style={{ boxShadow: '4px 4px 0px rgba(0, 255, 65, 0.3)' }}>
              TELEGRAM
            </Button>
            <Button size="lg" className="text-[10px] px-6 py-4 bg-secondary border-4 border-primary hover:bg-primary/20" style={{ boxShadow: '4px 4px 0px rgba(0, 255, 65, 0.3)' }}>
              GITHUB
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t-4 border-primary/30 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-primary" style={{ boxShadow: '0 0 10px rgba(0, 255, 65, 0.6)' }} />
              <span className="text-xs font-bold">MUDICOIN</span>
            </div>
            <p className="text-[8px] text-primary/60">
              © 2025 ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;