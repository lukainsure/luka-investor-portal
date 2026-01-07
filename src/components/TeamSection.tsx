import { Linkedin } from 'lucide-react';

const TeamSection = () => {
  const founders = [
    {
      name: 'Karel Frank',
      role: 'Pricing, Systems & AI',
      bio: 'Actuarial background with leadership roles in multiple successful insurance startups including OUTsurance and Youi. Former Group Strategy Officer at OUTsurance. Brings rare depth in pricing, strategy, and insurance systems.',
      image: '/karel.jpeg',
      linkedin: 'https://www.linkedin.com/in/karel-frank-69164952',
      // twitter: '#', removed
    },
    {
      name: 'Dawie Loots',
      role: 'Finance & Data',
      bio: 'CA(SA) with 20+ years’ experience,mainly in insurance, including CFO and CEO roles at MUA Insurance Acceptances. AWS Certified Solutions Architect focused on data science and cloud-native systems. Bridges financial discipline with technical execution.',
      image: '/dawie.jpg',
      linkedin: 'https://www.linkedin.com/in/dawieloots',
      // twitter: '#', removed
    },
    {
      name: 'Greeff Moolman',
      role: 'Brand, Marketing & Distribution',
      bio: 'MSc in Strategic Marketing, with 15 years’ executive experience across insurance and consumer brands. Deep expertise in consumer psychology, brand building, and innovative distribution channels.',
      image: '/greeff.jpeg',
      linkedin: 'https://www.linkedin.com/in/greeffmoolman',
      // twitter: '#', removed
    },
    {
      name: 'Johan Fourie', //'Josh Hayden'
      role: 'Operations, Service & Automation',
      bio: '15+ years across insurance and service industries in New Zealand and Australia (Hollard, Suncorp, Youi). Specialist in operations, automation, CRM, analytics, and end-to-end system integration.',
      image: '/johan.jpeg',
      linkedin: 'https://www.linkedin.com/in/johan-joe-fourie-8301609/',
      // twitter: '#', removed
    },
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-card">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
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
              Luka is led by a founding team that combines deep insurance domain experience with modern systems, data, and AI capability.
            </p>
          </div>

          {/* Founders */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="group p-6 rounded-2xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300 text-center flex flex-col h-full"
              >
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover scale-110 transition-transform duration-500 group-hover:scale-125"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1">{founder.name}</h3>
                <p className="text-xs text-primary mb-4 font-medium uppercase tracking-wide h-8 flex items-center justify-center">{founder.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {founder.bio}
                </p>
                <div className="flex items-center justify-center gap-3 mt-auto">
                  <a
                    href={founder.linkedin}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg font-light text-foreground">
              Together, the team has built, scaled, and operated insurers before — <br className="hidden md:block" />and now brings that experience to an AI-native model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
