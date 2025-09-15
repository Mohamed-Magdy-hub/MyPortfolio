import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Code2, Cloud, Zap } from "lucide-react";

export function CoverSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cover" className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="animate-fade-in-up">
          {/* Floating Icons */}
          <div className="relative mb-12">
            <div className="absolute -top-8 -left-8 animate-bounce delay-100">
              <div className="p-3 bg-primary/20 rounded-full backdrop-blur-sm">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="absolute -top-4 -right-12 animate-bounce delay-300">
              <div className="p-3 bg-blue-600/20 rounded-full backdrop-blur-sm">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="absolute -bottom-6 left-4 animate-bounce delay-500">
              <div className="p-3 bg-green-600/20 rounded-full backdrop-blur-sm">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
            </div>

            {/* Main Profile Circle */}
            <div className="w-40 h-40 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl mx-auto mb-8 animate-pulse">
              MM
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in-up delay-200" data-testid="cover-title">
            Mohamed Magdy
          </h1>
          
          {/* Subtitle with typing effect */}
          <div className="text-2xl md:text-4xl text-muted-foreground mb-8 animate-fade-in-up delay-400">
            <span className="inline-block">Multi-Cloud Engineer</span>
            <span className="inline-block mx-2 text-primary">•</span>
            <span className="inline-block">DevOps Specialist</span>
          </div>

          {/* Key highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-600">
            <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium">AWS Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">Azure Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">1+ Years Experience</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up delay-800">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              data-testid="button-explore"
            >
              Explore My Journey
              <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}