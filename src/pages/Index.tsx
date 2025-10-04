import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, ArrowRight, ExternalLink, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const experienceData = [
  {
    id: 1,
    title: "AI Program Manager",
    company: "College of Natural Sciences - iCons, UMass Amherst",
    location: "Amherst, MA",
    period: "Present",
    type: "Research",
    companyIcon: "/lovable-uploads/840b11ca-d415-47c5-af0d-a26909dae55b.png",
    description: "Leading AI integration across research labs. Facilitating identification and integration of AI agents across diverse research labs, streamlining workflows and developing AI-aware educational curriculum.",
    achievements: [
      "Facilitate identification and integration of AI agents across diverse research labs",
      "Streamlining workflows and developing AI-aware educational curriculum",
      "Developing new educational track: 'AI and the Future of Work'"
    ],
    technologies: ["AI/ML tools", "Educational technology", "Research coordination"]
  },
  {
    id: 2,
    title: "Staff IT Support",
    company: "Centre for Agriculture Food and Environment, UMass Amherst",
    location: "Amherst, MA",
    period: "Spring '25",
    type: "Academic",
    companyIcon: "/lovable-uploads/840b11ca-d415-47c5-af0d-a26909dae55b.png",
    description: "Providing technical support and IT infrastructure management for agricultural research initiatives.",
    achievements: ["Technical support for agricultural research computing infrastructure"],
    technologies: ["IT Support", "Infrastructure Management"]
  },
  {
    id: 3,
    title: "Makerspace Hardware Engineer",
    company: "M5 Makerspace, UMass Amherst",
    location: "Amherst, MA", 
    period: "Fall '24",
    type: "Academic",
    companyIcon: "/lovable-uploads/7f3d2ffd-78a2-415b-8ae0-083eea674d9f.png",
    description: "Hardware engineering and prototyping support in university makerspace environment.",
    achievements: ["Hardware prototyping and engineering support for student projects"],
    technologies: ["Hardware Engineering", "Prototyping", "Makerspace Tools"]
  },
  {
    id: 4,
    title: "Senior Design Project Lead",
    company: "Neely & Daughters (Client Project)",
    location: "New York, NY (Remote)",
    period: "Fall '24 - Summer '25",
    type: "Academic",
    companyIcon: "/lovable-uploads/92b24c52-5193-4847-a4c9-a8379f244495.png",
    description: "Leading cross-functional team developing intelligent wearable technology. Led team of 4 engineers developing Neely 33 Smart Shoe with integrated pressure sensors, IMUs, and Nordic nRF52840 MCU for gesture-based control.",
    achievements: [
      "Led team of 4 engineers developing Neely 33 Smart Shoe",
      "Architected embedded C++ firmware with real-time sensor fusion (12ms BLE latency)",
      "Designed custom flexible PCB with 16-hour continuous operation",
      "Paper under review: 'Smart Shoes - First Steps in Bio-Mechanical Sensing' (IEEE Pervasive Computing)"
    ],
    technologies: ["C++", "Nordic nRF52840", "BLE", "PCB Design", "Sensor Fusion"]
  },
  {
    id: 5,
    title: "Logic/Design Verification Intern",
    company: "Advanced Micro Devices (AMD)",
    location: "Boxborough, MA",
    period: "Summer '24",
    type: "Internship",
    companyIcon: "/lovable-uploads/7b7ab3a5-2e6c-4b1d-bb5b-5272972a273c.png",
    description: "Optimizing next-generation ZEN microprocessor designs. Optimized gate-level designs for ZEN microprocessor cores, reducing area utilization and built modular UVM-based testbench components.",
    achievements: [
      "Optimized gate-level designs for ZEN microprocessor cores, reducing area utilization",
      "Built modular UVM-based testbench components and assertions",
      "Automated design verification processes, reducing testing cycle time by 30%",
      "Cross-functional collaboration with RTL, DFT, and P&R teams for PAT compliance"
    ],
    technologies: ["SystemVerilog", "UVM", "Python", "Logic Minimization", "PAT Analysis"]
  },
  {
    id: 6,
    title: "Co-Founder",
    company: "Tyre - YC Startup",
    location: "Remote",
    period: "Spring '24",
    type: "Startup",
    companyIcon: "/lovable-uploads/f6fab023-9a50-4a7f-bc28-9a15ff35cbda.png",
    description: "Co-founded rideshare platform for students. Invited to YC East Startup School and reached YC incubator interview round.",
    achievements: ["Invited to YC East Startup School", "Reached YC incubator interview round"],
    technologies: ["Startup Development", "Platform Design", "Business Strategy"]
  },
  {
    id: 7,
    title: "Neuromorphic Computing Researcher",
    company: "Bio-Medical Engineering Lab, UMass Amherst",
    location: "Amherst, MA",
    period: "Fall '23",
    type: "Research",
    companyIcon: "/lovable-uploads/840b11ca-d415-47c5-af0d-a26909dae55b.png",
    description: "Exploring non-silicon alternatives for next-generation computing. Designed analog circuits on Nafion wafers for VLSI alternatives and achieved 12% power efficiency improvement through signal integrity analysis.",
    achievements: [
      "Designed analog circuits on Nafion wafers for VLSI alternatives",
      "Achieved 12% power efficiency improvement through signal integrity analysis",
      "Tested circuits with Keysight Agilent oscilloscopes and logic analyzers",
      "Co-authored research paper: 'Squishy Bioelectronic Circuits' (Cell Press Devices)"
    ],
    technologies: ["Analog Circuit Design", "SPICE", "Keysight Tools", "Power Analysis"]
  },
  {
    id: 8,
    title: "Embedded Systems Engineering Intern",
    company: "Core Summer Internships, UMass Amherst",
    location: "Amherst, MA",
    period: "Summer '23",
    type: "Internship",
    companyIcon: "/lovable-uploads/840b11ca-d415-47c5-af0d-a26909dae55b.png",
    description: "Developing assistive technology for improved human interaction. Developed prosthetic arm control system with MyoWare muscle sensor integration and designed real-time embedded system for EMG signal processing.",
    achievements: [
      "Developed prosthetic arm control system with MyoWare muscle sensor integration",
      "Designed real-time embedded system for EMG signal processing",
      "Optimized control algorithms achieving 10% grip strength enhancement",
      "Extensive testing and calibration for improved user dexterity"
    ],
    technologies: ["Embedded C", "Signal Processing", "EMG Sensors", "Motor Control"]
  },
  {
    id: 9,
    title: "Software Engineer",
    company: "Axaram Codelabs",
    location: "Gujarat, India (Remote)",
    period: "Jan '21 - Jun '21",
    type: "Professional",
    companyIcon: "/lovable-uploads/24d4654e-0ca1-482e-8d06-92fe1b554be3.png",
    description: "First professional experience during COVID-19 pandemic. Developed web applications and software solutions during early college years, gaining foundational experience in software development lifecycle.",
    achievements: [
      "Developed web applications and software solutions during early college years",
      "Gained foundational experience in software development lifecycle",
      "Worked remotely during pandemic, developing self-discipline and time management",
      "Built client-facing applications and learned professional software practices"
    ],
    technologies: ["Web Development", "Software Engineering", "Client Communication"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Press Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Newspaper className="w-6 h-6 text-accent" />
              <h2 className="text-2xl md:text-3xl font-bold">
                In the <span className="gradient-text">News</span>
              </h2>
            </div>
            <p className="text-muted-foreground">Recent features and press coverage</p>
          </div>

          <a 
            href="https://icons.cns.umass.edu/news/om-tank-25-returns-shape-future-ai-icons"
            target="_blank"
            rel="noopener noreferrer"
            className="block animate-scale-in"
          >
            <Card className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-gradient-card border border-accent/20 group">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="default" className="bg-accent">Featured</Badge>
                    <span className="text-sm text-muted-foreground">February 2025</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    Om Tank '25 Returns to Shape the Future of AI at iCons
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Featured in iCons news for returning as AI Program Manager to lead AI integration 
                    across research labs and develop AI-aware educational curriculum, driving innovation 
                    in interdisciplinary research and education.
                  </p>
                  <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                    <span>Read full article</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Card>
          </a>
        </div>
      </div>
      
      {/* Experience Timeline Section */}
      <div data-section="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey through impactful roles in research, industry, and academia, 
              driving innovation in hardware design and computer engineering.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-tech-orange"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experienceData.map((item, index) => (
                <div key={item.id} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-slide-in-left`} style={{ animationDelay: `${index * 0.2}s` }}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-accent rounded-full border-4 border-background shadow-glow z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <Card className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-gradient-card border border-border/50">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant={item.type === 'Research' ? 'default' : item.type === 'Internship' ? 'secondary' : 'outline'} className="mb-2">
                            {item.type}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.period}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {item.title}
                        </h3>
                        
                        <div className="flex items-center text-primary font-medium mb-1">
                          {item.companyIcon && (
                            <img 
                              src={item.companyIcon} 
                              alt={`${item.company} logo`}
                              className={`mr-2 rounded-sm object-contain ${
                                item.company.includes('Neely') ? 'w-8 h-4' : 'w-6 h-6'
                              }`}
                            />
                          )}
                          {item.company}
                        </div>
                        
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="flex items-center text-sm font-semibold mb-2 text-foreground">
                          <Award className="w-4 h-4 mr-2 text-accent" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-accent mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-foreground">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrow to Projects */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">
              Explore My <span className="gradient-text">Projects</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover the innovative projects and research initiatives that showcase 
              my technical expertise and creative problem-solving abilities.
            </p>
            <Link 
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-medium hover:shadow-strong"
            >
              View Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
