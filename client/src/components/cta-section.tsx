import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  Star,
  MessageCircle,
  Download
} from "lucide-react";

export function CTASection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/Mohamed-Magdy-Mahmoud-Multicloud-certified-resume-DevOps.pdf';
    link.download = 'Mohamed-Magdy-Mahmoud-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const benefits = [
    "AWS & Azure certified expertise",
    "1+ years of hands-on experience",
    "24/7 support and consultation",
    "Fast project delivery",
    "Cost-effective solutions",
    "Ongoing maintenance included"
  ];

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-blue-600/5 to-purple-600/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="cta-title">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's work together to build scalable, secure, and efficient cloud solutions for your business. 
            Take the next step towards digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Benefits */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">Why Choose My Services?</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-green-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Testimonial Card */}
            <Card className="mt-8 bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Mohamed's expertise in cloud architecture helped us reduce infrastructure costs by 40% 
                  while improving our system's reliability and performance."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    TC
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Tech Company CEO</p>
                    <p className="text-xs text-muted-foreground">Previous Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Call to Action */}
          <div className="animate-fade-in-up delay-300">
            <Card className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-border shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-4">
                    Let's Discuss Your Project
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Get a free consultation and personalized recommendations for your cloud infrastructure needs.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Button
                    onClick={scrollToContact}
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    data-testid="button-get-started"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={handleDownloadCV}
                      className="flex-1 h-12 font-medium border-2 hover:bg-muted/50"
                      data-testid="button-download-portfolio"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="flex-1 h-12 font-medium border-2 hover:bg-muted/50"
                      data-testid="button-schedule-call"
                    >
                      <a href="tel:+201016673396" className="inline-flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>

                  {/* Contact Information */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>mohamed.shaheed.mm@gmail.com</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+20 1016673396</span>
                    </div>
                  </div>
                </div>

                {/* Urgency Indicator */}
                <div className="mt-6 p-4 bg-green-600/10 border border-green-600/20 rounded-lg">
                  <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>Free consultation this week - Limited spots available!</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="text-center animate-fade-in-up delay-600">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Available for new projects</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Response time: Usually within 2-4 hours • Free consultation • No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}