import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone, 
  Calendar,
  Send,
  MessageCircle,
  Briefcase,
  GraduationCap
} from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "om.tank@university.edu",
    action: "mailto:om.tank@university.edu"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "San Francisco Bay Area, CA",
    action: null
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    label: "Availability",
    value: "Open to opportunities",
    action: null
  }
];

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/omtank",
    action: "https://linkedin.com/in/omtank"
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "github.com/omtank",
    action: "https://github.com/omtank"
  }
];

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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're a graduate program admissions committee, industry recruiter, 
            or fellow researcher, I'd love to discuss opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-medium animate-slide-in-left">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Send className="w-6 h-6 mr-3 text-primary" />
                Send a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Organization</label>
                  <Input placeholder="University, Company, or Organization" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="What would you like to discuss?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me more about your inquiry, opportunity, or how we might collaborate..."
                    rows={6}
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Contact Details */}
            <Card className="p-6 shadow-medium">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-primary mr-3">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 shadow-medium">
              <h3 className="text-xl font-bold mb-4">Professional Profiles</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open(social.action, '_blank')}
                  >
                    <div className="text-primary mr-3">
                      {social.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium">{social.label}</div>
                      <div className="text-xs text-muted-foreground">{social.value}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Inquiry Types */}
            <Card className="p-6 shadow-medium">
              <h3 className="text-xl font-bold mb-4">What I'm Open To</h3>
              <div className="space-y-4">
                {inquiryTypes.map((type, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-accent mr-3 mt-1">
                      {type.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">{type.title}</div>
                      <div className="text-sm text-muted-foreground">{type.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Response Time */}
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground mb-3">
                I typically respond to messages within 24-48 hours during business days.
              </p>
              <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-200">
                Currently Available
              </Badge>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="p-8 bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20">
            <h3 className="text-2xl font-bold mb-4">Prefer Other Communication Methods?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm also active on professional networks and open to scheduled video calls 
              for more detailed discussions about opportunities and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button variant="glow" size="lg">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message on LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;