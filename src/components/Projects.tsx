import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Zlaata",
    description: "Trendy women's fashion e-commerce platform with extensive clothing collections, smart product recommendations, and seamless shopping experience",
    tech: ["React", "E-commerce", "Responsive Design", "Payment Integration"],
    url: "https://www.zlaata.com/",
    category: "E-commerce"
  },
  {
    title: "DigiTathya",
    description: "Anti-counterfeiting and supply chain verification platform using QR technology for product authentication, warranty management, and brand protection",
    tech: ["Angular", "QR Technology", "Supply Chain", "Security"],
    url: "https://digitathya.com/",
    category: "Product Security"
  },
  {
    title: "Zrika",
    description: "Healthcare and wellness platform providing comprehensive health solutions and patient management systems",
    tech: ["React", "Healthcare", "Patient Management", "UI/UX"],
    url: "https://www.zrika.com/",
    category: "Healthcare"
  },
  {
    title: "GoshHR",
    description: "Cloud-based HR software with MyTimesheet for workflow tracking, MyNest for amenities management, and TimeLyze for productivity analytics",
    tech: ["Angular", "HRMS", "Timesheet", "Dashboard", "Analytics"],
    url: "https://goshhr.com/",
    category: "HRMS"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Real-world applications I've built and contributed to
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 h-full hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-primary/80 mt-1">
                        {project.category}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary shrink-0"
                      asChild
                    >
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
