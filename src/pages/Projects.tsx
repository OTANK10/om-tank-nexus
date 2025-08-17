import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/enhanced-button";
import { Code, Microchip, Brain, Smartphone, Zap, Cpu, ExternalLink, Github, Globe, ArrowRight } from "lucide-react";

const projectsData = [
  {
    id: 3,
    title: "GNN based Circuit Timing Prediction for VLSI Design",
    category: "Research",
    description: "Develop a Graph Neural Network architecture using PyTorch Geometric to predict gate delays in digital circuits, to achieve <10% mean absolute error on synthetic circuit benchmarks.",
    highlights: [
      "<10% mean absolute error on synthetic circuit benchmarks",
      "PyTorch Geometric implementation",
      "Graph Neural Network architecture",
      "Digital circuit timing optimization"
    ],
    technologies: ["PyTorch", "Python", "NetworkX", "Graph Neural Networks"],
    status: "Present",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/OTANK10/GNN-Circuit-Timing-Prediction"
  },
  {
    id: 4,
    title: "GPU-Accelerated RTL Logic Simulator based on Nvidia's GEM",
    category: "Hardware",
    description: "Develop a CUDA-based RTL simulator for basic Verilog circuits, translating RTL into logic gate models and design a custom logic executor mimicking a simplified VLIW architecture to enable word-level parallelism on Nvidia GPUs.",
    highlights: [
      "CUDA-based RTL simulation",
      "Custom logic executor design",
      "VLIW architecture implementation",
      "Word-level parallelism on GPUs"
    ],
    technologies: ["CUDA", "Verilog", "GPU Computing", "RTL Design"],
    status: "June 25",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/OTANK10/GEM-Nvidia-RTL-SIM"
  },
  {
    id: 5,
    title: "UVM-Based Verification Environment for 32-bit Aligner",
    category: "Hardware",
    description: "Developed modular UVM components including RX/TX agents, predictors, register model, and scoreboard to enable full stimulus-response validation.",
    highlights: [
      "Modular UVM component design",
      "Full stimulus-response validation",
      "RX/TX agents implementation",
      "Register model and scoreboard"
    ],
    technologies: ["SystemVerilog", "UVM testbench", "Verification"],
    status: "Spring 25",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/OTANK10/UVM"
  },
  {
    id: 6,
    title: "4-Tap FIR Filter on Intel DE1-SoC FPGA",
    category: "Hardware",
    description: "Designed a 4-tap FIR filter using a scalable modular architecture with ARM Cortex-A9 HPS integration, real-time testing, and BRAM2S6 displays for 75-segment LEDs.",
    highlights: [
      "Scalable modular architecture",
      "ARM Cortex-A9 HPS integration",
      "Real-time testing capabilities",
      "75-segment LED display integration"
    ],
    technologies: ["Verilog", "RTL Design", "FPGA", "ARM Cortex-A9"],
    status: "Winter 25",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/OTANK10/FIR-Filter-FPGA-Implementation"
  },
  {
    id: 7,
    title: "Hardware Trojan Detection using Side-Channels",
    category: "Security",
    description: "Developed novel approach to detect hardware Trojans using simulation-based side-channel features achieving 93.5% detection accuracy across multiple circuits by PCA dimensionality reduction on behavioral data.",
    highlights: [
      "93.5% detection accuracy",
      "Simulation-based side-channel analysis",
      "PCA dimensionality reduction",
      "Multi-circuit validation"
    ],
    technologies: ["Verilog", "Modelsim", "Power Analysis", "PCA"],
    status: "Summer 24",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/OTANK10/HardwareTrojan"
  },
  {
    id: 12,
    title: "Cache Performance Analysis: Sorting Algorithms Under Different Memory Hierarchies",
    category: "Hardware",
    description: "In-depth analysis of cache performance for Quicksort and Radix Sort algorithms using Valgrind's Cachegrind tool, examining how cache organization parameters impact algorithm performance across varying data sizes.",
    highlights: [
      "Comparative analysis of Quicksort vs Radix Sort cache behavior",
      "Valgrind Cachegrind tool implementation",
      "Memory hierarchy optimization study",
      "Cache miss rate and access pattern analysis"
    ],
    technologies: ["C", "Valgrind", "Cachegrind", "Performance Analysis", "CPU Architecture"],
    status: "Fall 24",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/OTANK10/cache-performance"
  },
  {
    id: 11,
    title: "Edge Computing: Research Challenges and Future Directions",
    category: "Research",
    description: "A commentary on the current paradigm of edge computing, examining core challenges including efficient resource management, real-time task processing, and adaptive system control in resource-constrained environments.",
    highlights: [
      "Comprehensive literature review of 5 major edge computing papers",
      "Critical analysis of current approaches and limitations",
      "Future directions focusing on AI integration and energy efficiency",
      "Published via UMass College of Engineering"
    ],
    technologies: ["Edge Computing", "IoT", "Resource Management", "Real-time Systems"],
    status: "Spring 24",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/OTANK10/Edge-Computing"
  },
  {
    id: 8,
    title: "BananAI - Detection of Anthracnose Infected Banana Cells using AI",
    category: "AI/ML",
    description: "Architected machine learning pipeline utilizing Meta's Segment Anything Model (SAM) for automated lesion segmentation in plant pathology.",
    highlights: [
      "Meta's SAM integration",
      "Automated lesion segmentation",
      "Plant pathology application",
      "Machine learning pipeline architecture"
    ],
    technologies: ["Python", "Tensorflow", "Meta's SAM", "Computer Vision"],
    status: "Spring 24",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/OTANK10/BananAI"
  },
  {
    id: 9,
    title: "Analog Circuits Design for Random Number Generation",
    category: "Hardware",
    description: "Designed a RNG using Linear Feedback Shift Registers for pseudo-random and Ring Oscillators for true rng, implemented on Altera SoC using Quartus Prime and ModelSim.",
    highlights: [
      "Linear Feedback Shift Register implementation",
      "Ring Oscillator design",
      "True and pseudo-random generation",
      "Altera SoC implementation"
    ],
    technologies: ["Verilog", "VHDL", "SPICE", "Quartus Prime"],
    status: "Fall 23",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/OTANK10/Random-Number-Generation"
  },
  {
    id: 13,
    title: "BLAST Device Characterization and Testing",
    category: "Research",
    description: "Research work on BLAST (Biocompatible biLayer graphene-based Artificial Synaptic Transistor) devices - a breakthrough in neuromorphic computing that mimics brain synapses using graphene and Nafion materials.",
    highlights: [
      "Biocompatible neuromorphic device development",
      "Graphene and Nafion material integration",
      "Synaptic behavior analysis and LTP/metaplasticity testing",
      "Electrical characterization using Agilent/Keysight SMUs"
    ],
    technologies: ["Neuromorphic Computing", "Graphene", "Nafion", "Electrical Testing", "Synaptic Devices"],
    status: "Fall 23",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/OTANK10/Silicon-alternate-tech"
  },
  {
    id: 10,
    title: "Federated Learning on Heterogeneous Sensors",
    category: "AI/ML",
    description: "Analyzed data heterogeneity and adversarial robustness in federated learning systems across 5 datasets, revealing trade-offs between model performance, convergence efficiency, and attack resilience in distributed environments.",
    highlights: [
      "5-dataset analysis",
      "Data heterogeneity study",
      "Adversarial robustness evaluation",
      "Distributed environment optimization"
    ],
    technologies: ["Jupyter Notebooks", "Python", "Data Science", "Federated Learning"],
    status: "Fall 23",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/OTANK10/Federated-Learning-on-Heterogeneous-Sensors"
  },
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
    image: "/lovable-uploads/e50bbb0f-e070-4e3e-a30b-afff4b12738d.png",
    websiteUrl: "https://neelyanddaughters.com/portfolio-posts/neely-air-freestyle/"
  },
  {
    id: 2,
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
  }
];

const categoryColors = {
  "Wearable Tech": "bg-purple-500/10 text-purple-700 border-purple-200",
  "Research": "bg-blue-500/10 text-blue-700 border-blue-200",
  "Startup": "bg-orange-500/10 text-orange-700 border-orange-200",
  "Hardware": "bg-red-500/10 text-red-700 border-red-200",
  "Security": "bg-emerald-500/10 text-emerald-700 border-emerald-200",
  "AI/ML": "bg-indigo-500/10 text-indigo-700 border-indigo-200"
};

const statusColors = {
  "In Development": "bg-yellow-500/10 text-yellow-700 border-yellow-200",
  "Published": "bg-green-500/10 text-green-700 border-green-200",
  "Present": "bg-green-500/10 text-green-700 border-green-200",
  "YC Interview Stage": "bg-orange-500/10 text-orange-700 border-orange-200",
  "June 25": "bg-blue-500/10 text-blue-700 border-blue-200",
  "Spring 25": "bg-cyan-500/10 text-cyan-700 border-cyan-200",
  "Winter 25": "bg-slate-500/10 text-slate-700 border-slate-200",
  "Fall 24": "bg-purple-500/10 text-purple-700 border-purple-200",
  "Summer 24": "bg-pink-500/10 text-pink-700 border-pink-200",
  "Spring 24": "bg-lime-500/10 text-lime-700 border-lime-200",
  "Fall 23": "bg-amber-500/10 text-amber-700 border-amber-200"
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
                      {project.icon && (
                        <div className="text-primary/60 mb-3 transform group-hover:scale-110 transition-transform duration-300">
                          {project.icon}
                        </div>
                      )}
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
                {/* Icon and Title for specific projects */}
                {project.icon && (
                  <div className="text-xl font-bold text-foreground mb-3 flex items-center">
                    {project.icon}
                    {(project.id === 1 || project.id === 2) && (
                      <span className="ml-2">{project.id === 1 ? "Smart Shoe" : "Tyre"}</span>
                    )}
                  </div>
                )}

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
                  {project.websiteUrl ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.websiteUrl, '_blank')}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Website
                    </Button>
                  ) : project.title === "Tyre - Student Rideshare Platform" ? (
                    <div className="flex-1"></div>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Show on GitHub
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation to Publications */}
        <div className="mt-16 text-center animate-fade-in">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/publications'}
            className="group hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            View Publications
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;