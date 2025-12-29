const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-medium text-foreground">Luka</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8">
              <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Problem
              </a>
              <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Solution
              </a>
              <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Demo
              </a>
              <a href="#invest" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Invest
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Luka
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              This website is for informational purposes only and does not constitute an offer to sell or a solicitation
              of an offer to buy any securities. Any investment involves risk, and past performance is not indicative of
              future results. All projections and financial information presented are illustrative only. This is a private,
              access-controlled website intended for invited investors only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
