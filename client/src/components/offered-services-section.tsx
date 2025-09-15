import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Settings, 
  Shield, 
  GitBranch, 
  Server, 
  Database, 
  Monitor, 
  Wrench,
  Rocket,
  Users,
  Target,
  Clock
} from "lucide-react";

export function OfferedServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Architecture Design",
      description: "Design and implement scalable, secure, and cost-effective cloud solutions across AWS and Azure platforms.",
      features: [
        "Multi-cloud strategy development",
        "Infrastructure architecture planning",
        "Cost optimization strategies",
        "Security best practices implementation"
      ],
      color: "blue"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipeline Development",
      description: "Build automated deployment pipelines that streamline your development workflow and reduce time to market.",
      features: [
        "Automated build and deployment",
        "Testing pipeline integration",
        "Branch-based workflows",
        "Rollback and monitoring strategies"
      ],
      color: "green"
    },
    {
      icon: Settings,
      title: "Infrastructure as Code (IaC)",
      description: "Transform your infrastructure management with code-based automation using Terraform, CloudFormation, and ARM templates.",
      features: [
        "Infrastructure automation",
        "Version-controlled deployments",
        "Environment consistency",
        "Disaster recovery planning"
      ],
      color: "purple"
    },
    {
      icon: Shield,
      title: "Cloud Security & Compliance",
      description: "Implement robust security measures and ensure compliance with industry standards and regulations.",
      features: [
        "Security assessment and hardening",
        "Identity and access management",
        "Compliance frameworks (SOC 2, ISO 27001)",
        "Vulnerability scanning and remediation"
      ],
      color: "red"
    },
    {
      icon: Monitor,
      title: "Monitoring & Observability",
      description: "Set up comprehensive monitoring solutions to ensure optimal performance and quick issue resolution.",
      features: [
        "Application performance monitoring",
        "Infrastructure metrics and alerts",
        "Log aggregation and analysis",
        "Custom dashboard creation"
      ],
      color: "yellow"
    },
    {
      icon: Database,
      title: "Database Management & Migration",
      description: "Optimize database performance and handle smooth migrations to cloud-native database solutions.",
      features: [
        "Database optimization and tuning",
        "Cloud migration strategies",
        "Backup and disaster recovery",
        "Performance monitoring and scaling"
      ],
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-600/10",
      green: "text-green-600 bg-green-600/10",
      purple: "text-purple-600 bg-purple-600/10",
      red: "text-red-600 bg-red-600/10",
      yellow: "text-yellow-600 bg-yellow-600/10",
      cyan: "text-cyan-600 bg-cyan-600/10"
    };
    return colors[color as keyof typeof colors] || "text-primary bg-primary/10";
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="services-title">
            Offered Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive cloud and DevOps solutions tailored to your business needs. 
            From architecture design to implementation and maintenance.
          </p>
          
          {/* Service Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="w-5 h-5 text-primary" />
              <span className="font-semibold">100%</span>
              <span>Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="font-semibold">24/7</span>
              <span>Support Available</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Rocket className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Fast</span>
              <span>Delivery</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
              data-testid={`service-card-${index}`}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform ${getColorClasses(service.color)}`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold text-center text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-card border border-border rounded-2xl p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            My Service Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">1. Consultation</h4>
              <p className="text-sm text-muted-foreground">
                Understanding your needs and current infrastructure
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">2. Planning</h4>
              <p className="text-sm text-muted-foreground">
                Designing the optimal solution architecture
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">3. Implementation</h4>
              <p className="text-sm text-muted-foreground">
                Building and deploying your cloud infrastructure
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">4. Support</h4>
              <p className="text-sm text-muted-foreground">
                Ongoing monitoring and maintenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}