import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    firm: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We'd love to share our detailed investment materials and answer any questions.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-16 px-8 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Thank you for your interest</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We've received your message and will be in touch shortly with more information 
                about Luka and our investment opportunity.
              </p>
            </div>
          ) : (
            <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="firm" className="block text-sm font-medium mb-2">
                    Firm / Organisation
                  </label>
                  <input
                    type="text"
                    id="firm"
                    name="firm"
                    value={formState.firm}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Venture Capital Partners"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your interest in Luka..."
                  />
                </div>

                <Button variant="hero" size="lg" type="submit" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>

              {/* Alternative Contact */}
              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-3">Or reach out directly:</p>
                <a
                  href="mailto:investors@luka.ai"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  investors@luka.ai
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
