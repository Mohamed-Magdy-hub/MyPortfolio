import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Certified",
      subtitle: "Cloud Practitioner",
      icon: "🟠",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      textColor: "text-orange-700 dark:text-orange-300",
      status: "Verified Certification",
    },
    {
      title: "Microsoft Certified",
      subtitle: "Azure Fundamentals",
      icon: "🔵",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-700 dark:text-blue-300",
      status: "Verified Certification",
    },
    {
      title: "DevOps Training",
      subtitle: "Digital Egyptian Pioneers Initiative",
      icon: "🎓",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      textColor: "text-green-700 dark:text-green-300",
      status: "Round Three - 2025",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="certifications-title">
            Certifications & Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="certifications-description">
            Industry-recognized certifications and continuous learning achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={cert.title} className="shadow-lg text-center" data-testid={`certification-${index}`}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2" data-testid={`certification-title-${index}`}>
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`certification-subtitle-${index}`}>
                    {cert.subtitle}
                  </p>
                </div>
                <Badge className={`${cert.bgColor} ${cert.textColor} font-medium`} data-testid={`certification-status-${index}`}>
                  {cert.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
