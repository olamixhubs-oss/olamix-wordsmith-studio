import profileImage from "@/assets/profile.jpg";

export const About = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl"></div>
                <img 
                  src={profileImage}
                  alt="Olamix Hub Team"
                  className="relative rounded-full w-full h-full object-cover border-4 border-accent/30 shadow-2xl"
                />
              </div>
            </div>
            
            <div className="animate-fade-in space-y-6">
              <div className="section-divider mb-8 mx-0"></div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                About Olamix Hub
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a professional writing studio dedicated to crafting content that doesn't just inform — it converts, engages, and builds lasting authority.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every piece we create is designed with intention: to tell your story clearly, build trust with your audience, and position your brand as a leader in your industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From compelling blog posts to persuasive case studies and conversion-focused copy, we help businesses communicate with clarity and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
