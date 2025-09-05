import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";

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
    <section id="about" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in-up">
          {/* Professional headshot placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              MM
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4" data-testid="hero-name">
            Mohamed Magdy Mahmoud
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6" data-testid="hero-title">
            Multi-Cloud Engineer & DevOps Specialist
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed" data-testid="hero-description">
            AWS & Azure certified professional with 1+ years of hands-on experience in cloud automation, CI/CD pipelines, and Infrastructure as Code.
            Passionate about designing scalable, secure cloud infrastructures and streamlining deployment workflows across multi-cloud environments.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2" data-testid="contact-email">
              <Mail className="w-4 h-4 text-primary" />
              <span>mohamed.shaheed.mm@gmail.com</span>
            </div>
            <div className="flex items-center gap-2" data-testid="contact-phone">
              <Phone className="w-4 h-4 text-primary" />
              <span>+20 1016673396</span>
            </div>
            <div className="flex items-center gap-2" data-testid="contact-location">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Alexandria, Egypt</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="inline-flex items-center px-6 py-3 font-medium"
              data-testid="button-contact"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="secondary"
              onClick={handleDownloadCV}
              className="inline-flex items-center px-6 py-3 font-medium"
              data-testid="button-download-cv"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button
              variant="secondary"
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
      </div>
    </section>
  );
}
