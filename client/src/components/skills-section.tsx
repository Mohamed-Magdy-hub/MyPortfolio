import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Cog, Container, Code } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      textColor: "text-blue-800 dark:text-blue-200",
      skills: ["AWS", "Azure", "EC2", "S3", "EKS", "RDS"],
    },
    {
      title: "CI/CD & Automation",
      icon: Cog,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20",
      textColor: "text-green-800 dark:text-green-200",
      skills: ["Jenkins", "GitHub Actions", "Terraform", "CloudFormation", "Ansible"],
    },
    {
      title: "Containerization",
      icon: Container,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      textColor: "text-purple-800 dark:text-purple-200",
      skills: ["Docker", "Kubernetes", "EKS"],
    },
    {
      title: "Programming",
      icon: Code,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
      textColor: "text-orange-800 dark:text-orange-200",
      skills: ["Python", "Bash", "PowerShell", "Git"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="skills-title">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="skills-description">
            Comprehensive expertise across cloud platforms, DevOps tools, and modern infrastructure technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="shadow-lg" data-testid={`skill-category-${index}`}>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <IconComponent className={`w-10 h-10 ${category.color} mb-2 mx-auto`} />
                    <h3 className="text-xl font-semibold text-card-foreground" data-testid={`skill-category-title-${index}`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`skill-tag ${category.bgColor} ${category.textColor} rounded-full text-sm font-medium`}
                        data-testid={`skill-tag-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
