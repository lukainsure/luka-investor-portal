import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

const RoadmapSection = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'MVP Development',
      timeline: 'Q1 2025',
      status: 'current',
      items: [
        'Core AI engine development',
        'Vehicle insurance product build',
        'Regulatory framework alignment',
        'Beta testing with pilot customers',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Pilot Launch',
      timeline: 'Q2 2025',
      status: 'upcoming',
      items: [
        'Limited market release',
        '1,000 policy target',
        'Claims process validation',
        'Customer feedback integration',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Market Launch',
      timeline: 'Q3-Q4 2025',
      status: 'upcoming',
      items: [
        'Full market availability',
        'Marketing campaign rollout',
        'Partnership development',
        'Additional product lines',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Scale & Expand',
      timeline: '2026+',
      status: 'upcoming',
      items: [
        'Geographic expansion',
        'Home & contents insurance',
        'Business insurance products',
        'International markets',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase mb-4 block">
              Vision & Roadmap
            </span>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Building the future of
              <span className="text-gradient font-normal"> insurance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear path from MVP to market leader. Each phase builds on the last, 
              with AI capabilities maturing at every step.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {/* Phases */}
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div
                  key={phase.phase}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10">
                    {phase.status === 'current' && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-pulse-glow" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-[45%] ${index % 2 === 1 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className={`p-6 rounded-2xl border ${
                      phase.status === 'current' 
                        ? 'bg-primary/5 border-primary/30' 
                        : 'bg-card border-border'
                    }`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-medium text-primary tracking-wider uppercase">
                          {phase.phase}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {phase.timeline}
                        </span>
                        {phase.status === 'current' && (
                          <span className="px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-medium mb-4">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            {phase.status === 'current' && i === 0 ? (
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            ) : (
                              <Circle className="w-4 h-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                            )}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Maturity Note */}
          <div className="mt-16 p-8 rounded-2xl bg-card border border-border text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <div className="w-12 h-1 bg-primary/50 rounded-full" />
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <div className="w-12 h-1 bg-primary rounded-full" />
            </div>
            <h3 className="text-lg font-medium mb-2">AI Maturity Over Time</h3>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Each phase increases automation coverage — from 70% in MVP to 95%+ at scale. 
              The AI learns from every interaction, continuously improving accuracy and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
