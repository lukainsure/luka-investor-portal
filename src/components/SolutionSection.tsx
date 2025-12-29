import { Bot, FileCheck, Shield, Zap } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: Bot,
      title: 'AI-Powered Underwriting',
      description: 'Instant risk assessment using machine learning models trained on millions of data points. No waiting, no guesswork.',
      highlight: 'Seconds, not days',
    },
    {
      icon: Zap,
      title: 'Automated Onboarding',
      description: 'Customers go from quote to covered in minutes through intelligent conversational interfaces.',
      highlight: '5-minute policies',
    },
    {
      icon: FileCheck,
      title: 'Instant Claims',
      description: 'AI reviews evidence, validates claims, and processes payments automatically. Most claims settled in under an hour.',
      highlight: '90% automation rate',
    },
    {
      icon: Shield,
      title: 'Smart Fraud Detection',
      description: 'Advanced pattern recognition catches fraud in real-time while ensuring honest customers get paid fast.',
      highlight: '60% fraud reduction',
    },
  ];

  return (
    <section id="solution" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase mb-4 block">
              The Solution
            </span>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Meet <span className="text-gradient font-normal">Luka</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A ground-up rebuild of insurance for the AI age. Every process automated. 
              Every interaction intelligent. Every customer delighted.
            </p>
          </div>

          {/* Solution Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-primary font-medium tracking-wider uppercase mb-2">
                      {solution.highlight}
                    </div>
                    <h3 className="text-xl font-medium mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cost Advantage */}
          <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12 rounded-2xl bg-card border border-border">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-light mb-4">
                The <span className="text-primary">lean</span> advantage
              </h3>
              <p className="text-muted-foreground">
                By automating everything, Luka operates with a fraction of the overhead of traditional insurers.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-secondary">
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">5%</div>
                <div className="text-sm text-muted-foreground">Expense ratio</div>
                <div className="text-xs text-muted-foreground/60 mt-1">vs 25% industry avg</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-secondary">
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Call centres</div>
                <div className="text-xs text-muted-foreground/60 mt-1">100% AI-driven</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-secondary">
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Scalability</div>
                <div className="text-xs text-muted-foreground/60 mt-1">Near-zero marginal cost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
