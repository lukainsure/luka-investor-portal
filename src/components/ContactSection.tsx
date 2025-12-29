import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-medium tracking-wider uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Ready to learn
              <span className="text-gradient font-normal"> more?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              We'd love to share our detailed investment materials and answer any questions.
            </p>

            <div className="p-8 md:p-12 rounded-2xl bg-card border border-border flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Email Us Directly</h3>
              <p className="text-muted-foreground mb-8">
                Reach out to our team for investment inquiries.
              </p>

              <Button variant="hero" size="xl" asChild className="gap-3">
                <a href="mailto:info@lukainsure.co.za">
                  <Mail className="w-5 h-5" />
                  info@lukainsure.co.za
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
