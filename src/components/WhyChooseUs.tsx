import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Clarity First",
    description: "We cut through the noise to deliver clear, compelling messages that resonate with your audience.",
  },
  {
    title: "Strategic Storytelling",
    description: "Every word is chosen to support your brand narrative and business objectives.",
  },
  {
    title: "Authority Building",
    description: "Content crafted to position you as a trusted expert in your industry.",
  },
  {
    title: "Results-Driven",
    description: "We focus on content that doesn't just engage — it converts and drives measurable results.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="section-divider mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Why Choose Olamix Hub?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional writing that transforms your brand communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex gap-4 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent mt-1 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
