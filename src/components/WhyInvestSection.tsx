import { Target, Cpu, Coins, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhyInvestSection = () => {
  const reasons = [
    {
      icon: Target,
      title: 'Massive Market',
      description: 'A $7 trillion global industry with fragmented incumbents and frustrated customers.',
    },
    {
      icon: Cpu,
      title: 'Strong Tech Leverage',
      description: 'AI enables 90% cost reduction vs traditional models. Technology creates a sustainable moat.',
    },
    {
      icon: Coins,
      title: 'Capital-Efficient Model',
      description: 'Lean operations mean faster path to profitability. Near-zero marginal cost to scale.',
    },
    {
      icon: Shield,
      title: 'Defensible Data Flywheel',
      description: 'Every interaction trains our AI. More customers = smarter models = better experience = more customers.',
    },
  ];

  return (
    <section id="invest" className="py-24 md:py-32 bg-card">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase mb-4 block">
              Investment Thesis
            </span>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Why invest in
              <span className="text-gradient font-normal"> Luka</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A rare opportunity to back a team that can execute on a proven thesis 
              in one of the world's largest addressable markets.
            </p>
          </div>

          {/* Investment Reasons */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Box */}
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center glow">
            <h3 className="text-2xl md:text-3xl font-light mb-6">
              The bottom line
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Luka combines a world-class team, breakthrough AI technology, and a massive market opportunity 
              to build the insurance company of the future. We're looking for partners who share our vision.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="gap-2">
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
