import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="education-title">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="education-description">
            Strong academic foundation in computer science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg" data-testid="education-degree">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-card-foreground" data-testid="education-degree-title">
                      Bachelor's Degree in Computer Science
                    </h3>
                    <p className="text-primary font-medium" data-testid="education-university">
                      Alexandria University
                    </p>
                  </div>
                </div>
                <Badge className="bg-primary/10 text-primary px-4 py-2 font-medium" data-testid="education-period">
                  2011 - 2023
                </Badge>
              </div>
              <p className="text-muted-foreground" data-testid="education-description-text">
                Comprehensive study of computer science fundamentals including programming, algorithms, data structures,
                software engineering, and system design. Strong foundation in mathematics and analytical problem-solving.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
