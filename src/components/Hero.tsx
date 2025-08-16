import { Button } from "@/components/ui/enhanced-button";
import { Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative circuit-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-glow">
            <img 
              src="/lovable-uploads/4e0ac380-d36e-4687-a1d0-67d21723ebef.png" 
              alt="Om Tank - Computer Engineering Graduate"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-6 animate-slide-in-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Om</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium whitespace-nowrap">
            Computer Engineering Graduate | VLSI Design | AI-Hardware Co-optimization
          </h2>
        </div>

        {/* Elevator Pitch */}
        <div className="mb-8 animate-slide-in-right">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about bridging the gap between hardware and software through innovative 
            <span className="text-accent font-medium"> VLSI design</span> and 
            <span className="text-primary font-medium"> AI-hardware optimization</span>. 
            Committed to community leadership and driving technological advancement.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in">
          <Button 
            variant="hero" 
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => window.open("https://www.linkedin.com/in/omtank/", "_blank")}
          >
            <Linkedin className="mr-2" />
            LinkedIn
          </Button>
          
          <Button 
            variant="glow" 
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => window.open("https://github.com/OTANK10", "_blank")}
          >
            <Github className="mr-2" />
            GitHub
          </Button>
          
          <Button 
            variant="tech" 
            size="lg"
            className="w-full sm:w-auto"
          >
            <Download className="mr-2" />
            Download CV
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;