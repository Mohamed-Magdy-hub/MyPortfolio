import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Download, ExternalLink, Heart, Target, Lightbulb, Users } from "lucide-react";

export function HeroSection() {
  const handleDownloadCV = () => {
    // Create a link element to download the CV
    const link = document.createElement('a');
    link.href = '/attached_assets/Mohamed-Magdy-Mahmoud-Multicloud-certified-resume-DevOps.pdf';
    link.download = 'Mohamed-Magdy-Mahmoud-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="about-title">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about cloud technologies and automation, I bring innovative solutions to complex infrastructure challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Info */}
          <div className="animate-fade-in-up">
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                MM
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="about-name">
              Mohamed Magdy Mahmoud
            </h3>
            <p className="text-xl text-primary mb-6" data-testid="about-title">
              Multi-Cloud Engineer & DevOps Specialist
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3" data-testid="about-email">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">mohamed.shaheed.mm@gmail.com</span>
              </div>
              <div className="flex items-center gap-3" data-testid="about-phone">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+20 1016673396</span>
              </div>
              <div className="flex items-center gap-3" data-testid="about-location">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Alexandria, Egypt</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadCV}
                className="inline-flex items-center px-6 py-3 font-medium"
                data-testid="button-download-cv"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                asChild
                className="inline-flex items-center px-6 py-3 font-medium"
                data-testid="button-linkedin"
              >
                <a
                  href="https://www.linkedin.com/in/mohamed-magdy-5051611a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>

          {/* Personal Story */}
          <div className="animate-fade-in-up delay-200">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a dedicated Multi-Cloud Engineer with a passion for building robust, scalable infrastructure solutions. 
                With AWS and Azure certifications backing my expertise, I specialize in automating complex cloud workflows 
                and implementing DevOps best practices.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My journey in cloud computing began with a fascination for how technology can transform businesses. 
                Over the past year, I've honed my skills in CI/CD pipeline development, Infrastructure as Code, 
                and multi-cloud architecture design, always focusing on security, efficiency, and scalability.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not working with cloud platforms, I enjoy exploring new technologies, contributing to 
                open-source projects, and sharing knowledge with the developer community. I believe in continuous 
                learning and staying ahead of industry trends.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up delay-400">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Passion</h4>
              <p className="text-sm text-muted-foreground">
                Driven by genuine enthusiasm for cloud technologies and innovation
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Precision</h4>
              <p className="text-sm text-muted-foreground">
                Focused on delivering accurate, reliable, and well-architected solutions
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Always exploring new approaches to solve complex technical challenges
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Collaboration</h4>
              <p className="text-sm text-muted-foreground">
                Committed to teamwork and knowledge sharing within the community
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
