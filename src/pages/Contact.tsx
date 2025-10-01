import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { 
  Mail, 
  Linkedin, 
  Phone, 
  MessageCircle,
  Briefcase,
  GraduationCap,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";

const inquiryTypes = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Graduate Programs",
    description: "Research opportunities, program discussions, academic collaboration"
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Professional Opportunities",
    description: "Internships, full-time positions, consulting projects"
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Collaboration",
    description: "Research partnerships, open source projects, community initiatives"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're an industry recruiter or fellow researcher, I'd love to discuss opportunities and collaborations.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <Card className="p-6 shadow-medium text-center animate-slide-in-left">
            <div className="text-primary mb-3 flex justify-center">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a 
              href="mailto:otank@umass.edu"
              className="text-foreground hover:text-primary transition-colors"
            >
              otank@umass.edu
            </a>
          </Card>

          {/* Phone */}
          <Card className="p-6 shadow-medium text-center animate-fade-in">
            <div className="text-primary mb-3 flex justify-center">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <a 
              href="tel:+14133445438"
              className="text-foreground hover:text-primary transition-colors"
            >
              +1 (413) 344-5438
            </a>
          </Card>

          {/* LinkedIn */}
          <Card className="p-6 shadow-medium text-center animate-slide-in-right">
            <div className="text-primary mb-3 flex justify-center">
              <Linkedin className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <a 
              href="https://linkedin.com/in/omtank"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              linkedin.com/in/omtank
            </a>
          </Card>
        </div>

        {/* What I'm Open To */}
        <Card className="p-8 shadow-medium mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center">What I'm Open To</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-accent mb-3 flex justify-center">
                <Briefcase className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Research Opportunities</h4>
              <p className="text-sm text-muted-foreground">VLSI design, AI-hardware optimization, academic research projects</p>
            </div>

            <div className="text-center">
              <div className="text-accent mb-3 flex justify-center">
                <Briefcase className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Internship Opportunities</h4>
              <p className="text-sm text-muted-foreground">Summer internships, co-op programs, industry experience</p>
            </div>
            
            <div className="text-center">
              <div className="text-accent mb-3 flex justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Collaboration</h4>
              <p className="text-sm text-muted-foreground">Research partnerships, open source projects, community initiatives</p>
            </div>
          </div>
        </Card>

        {/* Back to Home */}
        <div className="text-center animate-fade-in">
          <Link to="/">
            <Button variant="hero" size="lg">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;