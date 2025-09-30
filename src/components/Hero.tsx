import { Button } from "@/components/ui/enhanced-button";
import { Github, Linkedin, GraduationCap, ChevronDown } from "lucide-react";
import EducationDialog from "./EducationDialog";
import umassLogoNew from "@/assets/umass-logo-new.png";
import cmuLogoNew from "@/assets/cmu-logo-new.png";
import scottieImage from "@/assets/scottie-dog.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative circuit-bg py-20 md:pt-16 md:pb-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Floating Company Logos */}
        <div className="absolute inset-0 opacity-40">
          {/* UMass Logo */}
          <div className="absolute top-[10%] left-[5%] animate-float" style={{ animationDelay: '0s', animationDuration: '15s' }}>
            <img 
              src="/lovable-uploads/840b11ca-d415-47c5-af0d-a26909dae55b.png" 
              alt="UMass Amherst logo"
              className="w-8 h-8 md:w-12 md:h-12 object-contain transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
          </div>
          
          {/* AMD Logo */}
          <div className="absolute top-[20%] right-[8%] animate-float" style={{ animationDelay: '2s', animationDuration: '18s' }}>
            <img 
              src="/lovable-uploads/7b7ab3a5-2e6c-4b1d-bb5b-5272972a273c.png" 
              alt="AMD logo"
              className="w-8 h-8 md:w-12 md:h-12 object-contain transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
          </div>
          
          {/* Neely Logo */}
          <div className="absolute bottom-[15%] left-[10%] animate-float" style={{ animationDelay: '4s', animationDuration: '20s' }}>
            <img 
              src="/lovable-uploads/92b24c52-5193-4847-a4c9-a8379f244495.png" 
              alt="Neely & Daughters logo"
              className="w-12 h-6 md:w-16 md:h-8 object-contain transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
          </div>
          
          {/* M5 Makerspace Logo */}
          <div className="absolute bottom-[25%] right-[12%] animate-float" style={{ animationDelay: '6s', animationDuration: '16s' }}>
            <img 
              src="/lovable-uploads/7f3d2ffd-78a2-415b-8ae0-083eea674d9f.png" 
              alt="M5 Makerspace logo"
              className="w-8 h-8 md:w-12 md:h-12 object-contain transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
          </div>
          
          {/* Tyre YC Startup Logo */}
          <div className="absolute top-[40%] left-[8%] animate-float" style={{ animationDelay: '8s', animationDuration: '22s' }}>
            <img 
              src="/lovable-uploads/f6fab023-9a50-4a7f-bc28-9a15ff35cbda.png" 
              alt="Tyre YC Startup logo"
              className="w-8 h-8 md:w-12 md:h-12 object-contain transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
          </div>
          
          {/* Axaram Codelabs Logo */}
          <div className="absolute top-[55%] right-[15%] animate-float" style={{ animationDelay: '10s', animationDuration: '14s' }}>
            <img 
              src="/lovable-uploads/24d4654e-0ca1-482e-8d06-92fe1b554be3.png" 
              alt="Axaram Codelabs logo"
              className="w-8 h-8 md:w-12 md:h-12 object-contain transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
          </div>
          
          {/* Carnegie Mellon Logo */}
          <div className="absolute top-[35%] right-[5%] animate-float" style={{ animationDelay: '12s', animationDuration: '17s' }}>
            <img 
              src={cmuLogoNew} 
              alt="Carnegie Mellon University logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
          </div>
          
          {/* UMass Logo */}
          <div className="absolute bottom-[35%] left-[15%] animate-float" style={{ animationDelay: '14s', animationDuration: '19s' }}>
            <img 
              src={umassLogoNew} 
              alt="UMass Amherst logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-6 md:mb-8 animate-fade-in relative">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-glow relative">
            <img 
              src="/lovable-uploads/4e0ac380-d36e-4687-a1d0-67d21723ebef.png" 
              alt="Om Tank - Computer Engineering Graduate"
              className="w-full h-full rounded-full object-cover"
            />
            
            {/* Carnegie Mellon Logo - Top Left */}
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4">
              <img 
                src={cmuLogoNew} 
                alt="Carnegie Mellon University"
                className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-40"
              />
            </div>
            
            {/* UMass Logo - Bottom Right */}
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4">
              <img 
                src={umassLogoNew} 
                alt="UMass Amherst"
                className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-4 md:mb-6 animate-slide-in-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-4">
            Hi, I'm <span className="gradient-text">Om</span>
          </h1>
          <h2 className="text-base sm:text-xl md:text-2xl text-muted-foreground font-medium">
            <span className="block sm:hidden">Computer Engineering Graduate</span>
            <span className="block sm:hidden">VLSI Design | AI-Hardware Co-optimization</span>
            <span className="hidden sm:block">Computer Engineering Graduate | VLSI Design | AI-Hardware Co-optimization</span>
          </h2>
        </div>

        {/* Elevator Pitch */}
        <div className="mb-6 md:mb-8 animate-slide-in-right">
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about bridging the gap between hardware and software through innovative 
            <span className="text-accent font-medium"> VLSI design</span> and 
            <span className="text-primary font-medium"> AI-hardware optimization</span>. 
            Committed to community leadership and driving technological advancement.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in relative">
          
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
          
          <EducationDialog>
            <Button 
              variant="tech" 
              size="lg"
              className="w-full sm:w-auto"
            >
              <GraduationCap className="mr-2" />
              Education
            </Button>
          </EducationDialog>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 md:mt-16 flex justify-center animate-bounce relative">
          {/* Scottie the Dog - positioned at bottom border */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-70" style={{ animationDelay: '1s', animationDuration: '20s' }}>
            <img 
              src={scottieImage} 
              alt="Scottie - Carnegie Mellon University mascot"
              className="w-20 h-16 md:w-24 md:h-20 object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
          
          <button 
            onClick={() => {
              const experienceSection = document.querySelector('[data-section="experience"]');
              if (experienceSection) {
                experienceSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Scroll to experience section"
          >
            <span className="text-sm font-medium mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
              See Experience
            </span>
            <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <ChevronDown className="w-4 h-4 animate-pulse" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;