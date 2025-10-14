export const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-heading font-bold text-foreground">
              Olamix Hub
            </h3>
            <p className="text-muted-foreground">
              Professional Content & Copywriting Studio
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Olamix Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
