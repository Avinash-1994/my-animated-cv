import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3",
  "Tailwind CSS", "Bootstrap", "SASS/SCSS", "Redux", "jQuery",
  "Git", "GitHub", "Bitbucket", "Jira", "Figma", "Adobe XD",
  "Ajax", "REST APIs", "GSAP", "Agile Methodologies"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technologies and tools I work with
        </p>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Badge 
                variant="secondary" 
                className="text-base px-6 py-3 bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-110"
              >
                {skill}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
