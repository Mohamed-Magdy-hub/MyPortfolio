import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohamed.shaheed.mm@gmail.com",
      href: "mailto:mohamed.shaheed.mm@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 1016673396",
      href: "tel:+201016673396",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Alexandria, Egypt",
      href: null,
    },
    {
      icon: ExternalLink,
      label: "LinkedIn",
      value: "Professional Profile",
      href: "https://www.linkedin.com/in/mohamed-magdy-5051611a0/",
    },
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "B2 (Upper Intermediate)" },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="contact-title">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-description">
            Ready to discuss your next cloud infrastructure project or DevOps transformation? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-lg" data-testid="contact-info-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-6" data-testid="contact-info-title">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    const content = (
                      <div className="flex items-center gap-4" data-testid={`contact-info-${index}`}>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-card-foreground">{info.label}</p>
                          <p className="text-primary hover:underline">{info.value}</p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a
                        key={info.label}
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={info.label}>{content}</div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg" data-testid="languages-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid="languages-title">
                  Languages
                </h3>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={lang.name} className="flex justify-between items-center" data-testid={`language-${index}`}>
                      <span className="font-medium text-card-foreground">{lang.name}</span>
                      <span className="text-muted-foreground">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg" data-testid="contact-form-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-6" data-testid="contact-form-title">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-card-foreground">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      data-testid="input-name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-card-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      data-testid="input-email"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-card-foreground">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                    data-testid="input-subject"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-card-foreground">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    data-testid="textarea-message"
                    className="mt-1 resize-vertical"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full font-medium"
                  disabled={contactMutation.isPending}
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-border text-center">
          <p className="text-muted-foreground mb-4" data-testid="footer-copyright">
            © 2024 Mohamed Magdy Mahmoud. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:mohamed.shaheed.mm@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-magdy-5051611a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-linkedin"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="tel:+201016673396"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
