import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-First Insurance</span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Insurance, 
            <span className="text-gradient font-normal"> reimagined</span>
            <br />
            by artificial intelligence
          </h1>

          {/* Subtext */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Luka is building the leanest, fastest, and fairest insurance company 
            in the world — powered entirely by AI. No legacy systems. No friction. 
            Just intelligent automation.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#demo">Explore the Vision</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#invest">View Investment Thesis</a>
            </Button>
          </div>

          {/* Metrics */}
          <div 
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-primary mb-2">3min</div>
              <div className="text-sm text-muted-foreground">Average claim time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-primary mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Cost reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">AI availability</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
