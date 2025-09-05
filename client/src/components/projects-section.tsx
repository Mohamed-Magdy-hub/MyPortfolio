import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Infinity, GitBranch, Settings, Container, Bot } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "CI/CD Pipeline for Docker & Kubernetes",
      description: "Designed and implemented Jenkins pipelines to automate build, test, and deployment of Dockerized applications to Kubernetes clusters (EKS).",
      icon: Infinity,
      technologies: ["Jenkins", "Docker", "Kubernetes", "EKS"],
      achievement: "Reduced manual deployment time by 30%",
      achievementIcon: "📈",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      textColor: "text-green-700 dark:text-green-300",
    },
    {
      title: "GitOps with Terraform & GitHub Actions",
      description: "Applied GitOps principles to manage infrastructure declaratively using Terraform (IaC). Automated deployments via GitHub Actions.",
      icon: GitBranch,
      technologies: ["Terraform", "GitHub Actions", "GitOps", "IaC"],
      achievement: "Version-controlled infrastructure deployments",
      achievementIcon: "🔀",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-700 dark:text-blue-300",
    },
    {
      title: "Kubernetes Cluster Deployment",
      description: "Deployed and managed applications on Kubernetes, optimizing resource allocation and scalability for production workloads.",
      icon: Settings,
      technologies: ["Kubernetes", "Resource Management", "Scalability"],
      achievement: "Optimized for production scalability",
      achievementIcon: "⚡",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      textColor: "text-purple-700 dark:text-purple-300",
    },
    {
      title: "Docker Containerization",
      description: "Containerized applications for consistent development and production environments, improving deployment reliability.",
      icon: Container,
      technologies: ["Docker", "Containerization", "DevOps"],
      achievement: "Enhanced deployment reliability",
      achievementIcon: "🛡️",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      textColor: "text-orange-700 dark:text-orange-300",
    },
  ];

  const ansibleProject = {
    title: "Ansible Automation",
    description: "Automated configuration management for servers using Ansible playbooks, significantly reducing manual setup time and ensuring consistent server configurations across environments.",
    icon: Bot,
    technologies: ["Ansible", "Configuration Management", "Automation", "Playbooks"],
    achievement: "Reduced setup time by 40%",
    achievementIcon: "⚡",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    textColor: "text-red-700 dark:text-red-300",
  };

  return (
    <section id="projects" className="py-20 bg-muted px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="projects-description">
            Hands-on experience with real-world DevOps and cloud infrastructure projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.title} className="project-card shadow-lg" data-testid={`project-${index}`}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <IconComponent className="text-primary text-xl w-5 h-5" />
                      <h3 className="text-xl font-semibold text-card-foreground" data-testid={`project-title-${index}`}>
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                          data-testid={`project-tech-${index}-${techIndex}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className={`${project.bgColor} rounded-lg p-3`}>
                      <span className={`${project.textColor} font-medium`} data-testid={`project-achievement-${index}`}>
                        <span className="mr-2">{project.achievementIcon}</span>
                        {project.achievement}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Ansible Project - Full Width */}
        <div className="max-w-4xl mx-auto">
          <Card className="project-card shadow-lg" data-testid="project-ansible">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="text-primary text-xl w-5 h-5" />
                  <h3 className="text-xl font-semibold text-card-foreground" data-testid="project-ansible-title">
                    {ansibleProject.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4" data-testid="project-ansible-description">
                  {ansibleProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {ansibleProject.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`project-ansible-tech-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className={`${ansibleProject.bgColor} rounded-lg p-3`}>
                  <span className={`${ansibleProject.textColor} font-medium`} data-testid="project-ansible-achievement">
                    <span className="mr-2">{ansibleProject.achievementIcon}</span>
                    {ansibleProject.achievement}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
