import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/enhanced-button";
import { Code, Microchip, Brain, Smartphone, Zap, Cpu, ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Neely 33 Smart Shoe",
    icon: <Smartphone className="w-6 h-6" />,
    category: "Wearable Tech",
    description: "Intelligent wearable technology with integrated pressure sensors, IMUs, and Nordic nRF52840 MCU for gesture-based control. Features real-time sensor fusion with 12ms BLE latency.",
    highlights: [
      "16-hour continuous operation",
      "Custom flexible PCB design", 
      "Real-time sensor fusion (12ms BLE latency)",
      "Paper under review: IEEE Pervasive Computing"
    ],
    technologies: ["C++", "Nordic nRF52840", "BLE", "PCB Design", "Sensor Fusion"],
    status: "In Development",
    image: "/lovable-uploads/92b24c52-5193-4847-a4c9-a8379f244495.png"
  },
  {
    id: 2,
    title: "Neuromorphic Computing Circuits",
    icon: <Brain className="w-6 h-6" />,
    category: "Research",
    description: "Exploring non-silicon alternatives for next-generation computing. Designed analog circuits on Nafion wafers for VLSI alternatives with 12% power efficiency improvement.",
    highlights: [
      "12% power efficiency improvement",
      "Signal integrity analysis optimization",
      "Keysight Agilent testing implementation",
      "Co-authored: 'Squishy Bioelectronic Circuits' (Cell Press)"
    ],
    technologies: ["Analog Circuit Design", "SPICE", "Keysight Tools", "Power Analysis"],
    status: "Published",
    image: "/lovable-uploads/840b11ca-d415-47c5-af0d-a26909dae55b.png"
  },
  {
    id: 3,
    title: "Prosthetic Arm Control System",
    icon: <Zap className="w-6 h-6" />,
    category: "Assistive Tech",
    description: "Developed prosthetic arm control system with MyoWare muscle sensor integration. Real-time embedded system for EMG signal processing with 10% grip strength enhancement.",
    highlights: [
      "10% grip strength enhancement",
      "Real-time EMG signal processing",
      "Improved user dexterity through testing",
      "MyoWare muscle sensor integration"
    ],
    technologies: ["Embedded C", "Signal Processing", "EMG Sensors", "Motor Control"],
    status: "Completed",
    image: "/api/placeholder/400/300"
  },
  {
    id: 4,
    title: "Tyre - Student Rideshare Platform",
    icon: <Smartphone className="w-6 h-6" />,
    category: "Startup",
    description: "Co-founded YC startup creating rideshare platform specifically for students. Reached YC incubator interview round and was invited to YC East Startup School.",
    highlights: [
      "Invited to YC East Startup School",
      "Reached YC incubator interview round",
      "Student-focused rideshare solution",
      "Cross-platform mobile application"
    ],
    technologies: ["Mobile Development", "Platform Design", "Business Strategy", "User Experience"],
    status: "YC Interview Stage",
    image: "/lovable-uploads/f6fab023-9a50-4a7f-bc28-9a15ff35cbda.png"
  },
  {
    id: 5,
    title: "ZEN Microprocessor Optimization",
    icon: <Cpu className="w-6 h-6" />,
    category: "Hardware",
    description: "Optimized gate-level designs for AMD ZEN microprocessor cores, reducing area utilization. Built modular UVM-based testbench components and automated verification processes.",
    highlights: [
      "30% reduction in testing cycle time",
      "Optimized gate-level designs",
      "Modular UVM-based testbench components",
      "Cross-functional PAT compliance collaboration"
    ],
    technologies: ["SystemVerilog", "UVM", "Python", "Logic Minimization", "PAT Analysis"],
    status: "Professional Project",
    image: "/lovable-uploads/7b7ab3a5-2e6c-4b1d-bb5b-5272972a273c.png"
  },
  {
    id: 6,
    title: "AI Education Curriculum",
    icon: <Brain className="w-6 h-6" />,
    category: "Education",
    description: "Developing AI-aware educational curriculum and facilitating integration of AI agents across diverse research labs. Creating new educational track: 'AI and the Future of Work'.",
    highlights: [
      "AI agent integration across research labs",
      "Streamlined research workflows",
      "New educational track development",
      "Cross-disciplinary AI curriculum"
    ],
    technologies: ["AI/ML Tools", "Educational Technology", "Research Coordination", "Curriculum Design"],
    status: "Ongoing",
    image: "/lovable-uploads/840b11ca-d415-47c5-af0d-a26909dae55b.png"
  }
];

const categoryColors = {
  "Wearable Tech": "bg-purple-500/10 text-purple-700 border-purple-200",
  "Research": "bg-blue-500/10 text-blue-700 border-blue-200",
  "Assistive Tech": "bg-green-500/10 text-green-700 border-green-200",
  "Startup": "bg-orange-500/10 text-orange-700 border-orange-200",
  "Hardware": "bg-red-500/10 text-red-700 border-red-200",
  "Education": "bg-teal-500/10 text-teal-700 border-teal-200"
};

const statusColors = {
  "In Development": "bg-yellow-500/10 text-yellow-700 border-yellow-200",
  "Published": "bg-green-500/10 text-green-700 border-green-200",
  "Completed": "bg-blue-500/10 text-blue-700 border-blue-200",
  "YC Interview Stage": "bg-orange-500/10 text-orange-700 border-orange-200",
  "Professional Project": "bg-purple-500/10 text-purple-700 border-purple-200",
  "Ongoing": "bg-teal-500/10 text-teal-700 border-teal-200"
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects spanning hardware design, software development, 
            research initiatives, and startup ventures.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left">
          {Object.keys(categoryColors).map((category) => (
            <Badge 
              key={category} 
              variant="outline" 
              className={`px-4 py-2 ${categoryColors[category as keyof typeof categoryColors]}`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image/Logo */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                {project.image && project.image !== "/api/placeholder/400/300" ? (
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="text-center">
                      <div className="text-primary/60 mb-3 transform group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div className="text-lg font-bold text-primary/80">
                        {project.title}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Category & Status Badges */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${categoryColors[project.category as keyof typeof categoryColors]}`}
                  >
                    {project.category}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${statusColors[project.status as keyof typeof statusColors]} block`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
                  {project.icon}
                  <span className="ml-2">{project.title}</span>
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Key Achievements</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 font-bold">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 animate-fade-in">
          <Card className="p-8 bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20">
            <h3 className="text-2xl font-bold text-center mb-6">Project Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Published Papers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-orange mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Performance Improvements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1</div>
                <div className="text-sm text-muted-foreground">YC Startup</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;