import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-full" />
            <span className="text-xl font-bold">MUDICOIN</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#tokenomics" className="text-muted-foreground hover:text-foreground transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</a>
            <Button className="bg-accent hover:bg-accent/90">Buy Now</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
              ONE MUDI
              <br />
              <span className="text-muted-foreground">TO RULE</span>
              <br />
              THEM ALL
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              The ultimate 8-bit memecoin bringing retro gaming culture to the blockchain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Coins" className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fair Launch</h3>
              <p className="text-muted-foreground">
                100% community-owned with no pre-sale or team allocation
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Shield" className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Secure</h3>
              <p className="text-muted-foreground">
                Audited smart contracts with locked liquidity
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Zap" className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fast</h3>
              <p className="text-muted-foreground">
                Lightning-fast transactions with minimal fees
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="tokenomics" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">
            TOKENOMICS
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex justify-between items-center p-6 bg-secondary rounded-lg">
                <span className="text-xl font-semibold">Total Supply</span>
                <span className="text-2xl font-bold">1,000,000,000</span>
              </div>
              <div className="flex justify-between items-center p-6 bg-secondary rounded-lg">
                <span className="text-xl font-semibold">Liquidity Pool</span>
                <span className="text-2xl font-bold text-accent">80%</span>
              </div>
              <div className="flex justify-between items-center p-6 bg-secondary rounded-lg">
                <span className="text-xl font-semibold">Community Rewards</span>
                <span className="text-2xl font-bold text-accent">15%</span>
              </div>
              <div className="flex justify-between items-center p-6 bg-secondary rounded-lg">
                <span className="text-xl font-semibold">Marketing</span>
                <span className="text-2xl font-bold text-accent">5%</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 animate-pulse" />
                <div className="absolute inset-8 rounded-full bg-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-black mb-2">MUDI</div>
                    <div className="text-muted-foreground">Token</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">
            ROADMAP
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-background font-bold">
                  ✓
                </div>
                <div className="w-0.5 h-full bg-border mt-2" />
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-bold mb-2">Phase 1: Launch</h3>
                <p className="text-muted-foreground">Token launch, liquidity pool creation, and initial community building</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-background font-bold">
                  2
                </div>
                <div className="w-0.5 h-full bg-border mt-2" />
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-bold mb-2">Phase 2: Growth</h3>
                <p className="text-muted-foreground">CEX listings, partnerships, and expanded marketing campaigns</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center text-background font-bold">
                  3
                </div>
                <div className="w-0.5 h-full bg-border mt-2" />
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-bold mb-2">Phase 3: Ecosystem</h3>
                <p className="text-muted-foreground">NFT collection launch, staking platform, and community governance</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center text-background font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Phase 4: Domination</h3>
                <p className="text-muted-foreground">Global expansion, major partnerships, and metaverse integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            JOIN THE<br />REVOLUTION
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Be part of the community that's redefining memecoins
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Twitter" className="mr-2" size={20} />
              Twitter
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Telegram
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Github" className="mr-2" size={20} />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full" />
              <span className="text-xl font-bold">MUDICOIN</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 MUDICOIN. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
