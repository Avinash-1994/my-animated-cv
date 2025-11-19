import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "Master of Science (I.T.)",
    institution: "Kalinga University, Raipur",
    year: "2020 - 2021"
  },
  {
    degree: "Postgraduate Degree Diploma",
    institution: "Dr. C. V. Raman University, Kota Bilaspur",
    year: "2016 - 2017"
  },
  {
    degree: "Bachelor of Arts",
    institution: "Bilaspur Vishwavidyalaya, Raipur",
    year: "2013 - 2016"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Academic background and qualifications
        </p>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="animate-slide-in-right"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg group-hover:animate-glow">
                      <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <span className="text-muted-foreground text-sm font-medium">{edu.year}</span>
                  </div>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
