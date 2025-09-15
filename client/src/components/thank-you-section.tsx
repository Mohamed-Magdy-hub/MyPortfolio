import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Star, 
  Coffee, 
  ArrowUp, 
  Linkedin, 
  Mail, 
  Github,
  MapPin,
  Calendar
} from "lucide-react";

export function ThankYouSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="thank-you" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div className="max-w-6xl mx-auto">
        {/* Main Thank You Message */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="thank-you-title">
            Thank You!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Thank you for taking the time to explore my portfolio and learn about my cloud engineering services. 
            I truly appreciate your interest and look forward to the possibility of working together.
          </p>
        </div>

        {/* Gratitude Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">For Your Time</h3>
              <p className="text-muted-foreground">
                Every moment you spent here means a lot to me. Thank you for considering my services 
                and taking the time to understand my approach.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up delay-200">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">For Your Interest</h3>
              <p className="text-muted-foreground">
                Your interest in cloud technologies and DevOps solutions inspires me to continue 
                delivering excellent services and innovative solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up delay-400">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">For Future Collaboration</h3>
              <p className="text-muted-foreground">
                Whether we work together now or in the future, I'm grateful for the opportunity 
                to potentially contribute to your success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final Message */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12 animate-fade-in-up delay-600">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Let's Stay Connected</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Feel free to reach out anytime if you have questions, need advice, or want to discuss 
              potential projects. I'm always happy to help fellow developers and businesses succeed 
              in their cloud journey.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                onClick={scrollToContact}
                className="inline-flex items-center px-6 py-3 font-medium bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                data-testid="button-final-contact"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send a Message
              </Button>
              
              <Button
                variant="outline"
                asChild
                className="inline-flex items-center px-6 py-3 font-medium"
                data-testid="button-linkedin-final"
              >
                <a
                  href="https://www.linkedin.com/in/mohamed-magdy-5051611a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>mohamed.shaheed.mm@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Alexandria, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-center animate-fade-in-up delay-800">
          <p className="text-lg text-muted-foreground mb-6">
            Wishing you success in all your endeavors! 🚀
          </p>
          
          <div className="flex justify-center items-center gap-4">
            <div className="h-px bg-border flex-1 max-w-32"></div>
            <div className="text-sm text-muted-foreground font-medium">Mohamed Magdy Mahmoud</div>
            <div className="h-px bg-border flex-1 max-w-32"></div>
          </div>

          {/* Back to Top Button */}
          <div className="mt-12">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-testid="button-back-to-top"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
            <p className="text-xs text-muted-foreground mt-2">Back to top</p>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border animate-fade-in-up delay-1000">
          <p className="text-sm text-muted-foreground">
            © 2025 Mohamed Magdy Mahmoud. Built with passion for cloud technologies.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Multi-Cloud Engineer & DevOps Specialist
          </p>
        </div>
      </div>
    </section>
  );
}