import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "IT Support Specialist",
      company: "Koncare Trading",
      period: "01/2024 - Present",
      current: true,
      responsibilities: [
        "Administer all aspects of Active Directory policy including creating and managing end-user accounts",
        "Provided L1/L2 support for hardware, software, and network troubleshooting",
        "Monitored and maintained network infrastructure including switches and routers",
      ],
    },
    {
      title: "Help Desk Specialist",
      company: "Bino Kids",
      period: "05/2019 - 08/2020",
      current: false,
      responsibilities: [
        "Installed, configured, and troubleshot hardware and software systems",
        "Monitored and maintained network infrastructure including switches and routers",
        "Managed user accounts and permissions in Active Directory environment",
      ],
    },
    {
      title: "Data Reporting Analyst",
      company: "Alexandria Pediatric Center",
      period: "01/2016 - 04/2019",
      current: false,
      responsibilities: [
        "Monitored and validated data quality and accuracy to maintain data integrity for reporting purposes",
        "Developed comprehensive reports for healthcare management and decision-making",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="experience-title">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="experience-description">
            Progressive career journey in IT support, systems administration, and technical solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative flex items-start" data-testid={`experience-${index}`}>
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                <Card className="md:ml-16 shadow-lg w-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-card-foreground" data-testid={`experience-title-${index}`}>
                        {exp.title}
                      </h3>
                      <Badge
                        variant={exp.current ? "default" : "secondary"}
                        className="mt-2 md:mt-0"
                        data-testid={`experience-period-${index}`}
                      >
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3" data-testid={`experience-company-${index}`}>
                      {exp.company}
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start gap-2"
                          data-testid={`experience-responsibility-${index}-${respIndex}`}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
