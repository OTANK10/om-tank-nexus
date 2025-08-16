import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

const experienceData = [
  {
    id: 1,
    title: "Research Assistant",
    company: "University VLSI Lab",
    location: "University Campus",
    period: "Jan 2024 - Present",
    type: "Research",
    description: "Leading research in AI-hardware co-optimization for neural network accelerators. Developed novel architectural designs that improved inference speed by 35% while reducing power consumption.",
    achievements: [
      "Published 2 papers in top-tier conferences",
      "Reduced power consumption by 35%",
      "Mentored 3 undergraduate students"
    ],
    technologies: ["Verilog", "SystemVerilog", "Python", "TensorFlow", "Cadence"]
  },
  {
    id: 2,
    title: "VLSI Design Intern",
    company: "TechCorp Semiconductors",
    location: "Silicon Valley, CA",
    period: "Jun 2023 - Aug 2023",
    type: "Internship",
    description: "Worked on digital circuit design and verification for next-generation processors. Contributed to the development of low-power memory controllers.",
    achievements: [
      "Optimized memory controller design",
      "Reduced verification time by 25%",
      "Received outstanding intern award"
    ],
    technologies: ["VHDL", "ModelSim", "Synopsys", "MATLAB", "C++"]
  },
  {
    id: 3,
    title: "Teaching Assistant",
    company: "Computer Engineering Department",
    location: "University Campus",
    period: "Sep 2022 - Dec 2023",
    type: "Academic",
    description: "Assisted in teaching Digital Logic Design and Computer Architecture courses. Conducted lab sessions for 120+ students and developed new learning materials.",
    achievements: [
      "Improved student satisfaction by 40%",
      "Developed 5 new lab experiments",
      "Mentored 50+ students"
    ],
    technologies: ["Digital Logic", "Computer Architecture", "Assembly", "FPGA"]
  },
  {
    id: 4,
    title: "Hardware Engineering Intern",
    company: "StartupTech Innovations",
    location: "Austin, TX",
    period: "May 2022 - Aug 2022",
    type: "Internship",
    description: "Designed and implemented embedded systems for IoT applications. Focused on low-power design and wireless communication protocols.",
    achievements: [
      "Developed 3 IoT prototypes",
      "Implemented power-saving algorithms",
      "Filed 1 provisional patent"
    ],
    technologies: ["ARM Cortex", "Arduino", "Embedded C", "PCB Design", "Wireless Protocols"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Experience Timeline Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
    </div>
  );
};

export default Index;
