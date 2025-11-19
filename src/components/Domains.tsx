import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, DollarSign, ShoppingBag, BarChart3, Globe, Layers, Heart, Package } from "lucide-react";

const domains = [
  {
    title: "HRMS & Timesheet System",
    icon: Briefcase,
    description: "Enterprise HR management and time tracking solutions"
  },
  {
    title: "Healthcare & Wellness",
    icon: Heart,
    description: "Healthcare applications and wellness platforms"
  },
  {
    title: "Fintech KYC & Payment Portal",
    icon: DollarSign,
    description: "Secure financial verification and payment processing"
  },
  {
    title: "E-commerce Web Platform",
    icon: ShoppingBag,
    description: "Full-featured online shopping experiences"
  },
  {
    title: "Product-Based Solutions",
    icon: Package,
    description: "Supply chain, anti-counterfeiting, and product management"
  },
  {
    title: "Enterprise Analytics Dashboard",
    icon: BarChart3,
    description: "Data visualization and business intelligence tools"
  },
  {
    title: "Brand Marketing Landing Pages",
    icon: Globe,
    description: "High-converting marketing websites"
  },
  {
    title: "Interactive Web Applications",
    icon: Layers,
    description: "Dynamic and engaging user experiences"
  }
];

const Domains = () => {
  return (
    <section id="domains" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Domain Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Industries and applications I've worked with
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-gradient-primary rounded-lg w-fit group-hover:animate-glow">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {domain.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{domain.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Domains;
