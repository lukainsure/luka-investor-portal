import { Linkedin, Twitter } from 'lucide-react';

const TeamSection = () => {
  const founders = [
    {
      name: 'Alexandra Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Head of Digital at a top-10 global insurer. 15 years transforming insurance operations. Stanford MBA.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Marcus Williams',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google AI researcher. Built ML systems processing billions of transactions. PhD in Machine Learning from MIT.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Sarah Nakamura',
      role: 'COO & Co-Founder',
      bio: 'Former McKinsey Partner specialising in insurtech. Scaled two startups to $100M+ revenue.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
    },
  ];

  const advisors = [
    {
      name: 'Dr. James Morrison',
      role: 'Regulatory Advisor',
      bio: 'Former APRA executive. 25 years in insurance regulation.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Emily Zhang',
      role: 'AI Advisor',
      bio: 'Partner at Sequoia Capital. Deep expertise in AI/ML investments.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Robert Singh',
      role: 'Insurance Advisor',
      bio: 'Former CEO of a major Australian insurer. 30+ years industry experience.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    },
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-card">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase mb-4 block">
              Team & Founders
            </span>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Execution-focused
              <span className="text-gradient font-normal"> leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A team that's built and scaled technology companies, 
              transformed insurance operations, and shipped AI products at scale.
            </p>
          </div>

          {/* Founders */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="group p-6 rounded-2xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/30 transition-colors">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">{founder.name}</h3>
                <p className="text-sm text-primary mb-4">{founder.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {founder.bio}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={founder.linkedin}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.twitter}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Advisors */}
          <div>
            <h3 className="text-xl font-medium text-center mb-8">Advisors</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {advisors.map((advisor) => (
                <div
                  key={advisor.name}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{advisor.name}</h4>
                    <p className="text-xs text-primary mb-1">{advisor.role}</p>
                    <p className="text-xs text-muted-foreground">{advisor.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
