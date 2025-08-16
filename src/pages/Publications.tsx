import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Award, ExternalLink } from "lucide-react";

const publicationsData = [
  {
    id: 1,
    title: "AI-Hardware Co-optimization for Energy-Efficient Neural Network Accelerators",
    authors: "Om Tank, Dr. Smith, Dr. Johnson",
    venue: "IEEE International Conference on Computer Design (ICCD)",
    year: "2024",
    type: "Conference Paper",
    status: "Published",
    description: "This paper presents a novel approach to co-optimizing AI algorithms and hardware architectures for neural network accelerators, achieving 35% improvement in energy efficiency while maintaining accuracy.",
    keywords: ["VLSI Design", "Neural Networks", "Hardware Acceleration", "AI Optimization"],
    link: "#"
  },
  {
    id: 2,
    title: "Low-Power Memory Controller Design for Edge Computing Applications",
    authors: "Om Tank, Dr. Wilson, Research Team",
    venue: "ACM/IEEE Design Automation Conference (DAC)",
    year: "2024",
    type: "Conference Paper",
    status: "Under Review",
    description: "A comprehensive study on designing power-efficient memory controllers specifically optimized for edge computing scenarios, focusing on reducing power consumption without compromising performance.",
    keywords: ["Memory Design", "Edge Computing", "Low Power", "VLSI"],
    link: "#"
  }
];

const Publications = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Research <span className="gradient-text">Publications</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributions to the field of biomedical-electronics and wearable tech sensing systems.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {publicationsData.map((publication, index) => (
            <Card 
              key={publication.id} 
              className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-gradient-card border border-border/50 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge 
                      variant={publication.status === 'Published' ? 'default' : 'secondary'}
                      className="mb-1"
                    >
                      {publication.status}
                    </Badge>
                    <Badge variant="outline" className="mb-1">
                      {publication.type}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {publication.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                  {publication.title}
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <FileText className="w-4 h-4 mr-2 text-accent" />
                  <span className="font-medium">{publication.authors}</span>
                </div>
                
                <div className="flex items-center text-sm text-primary font-medium">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {publication.venue}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {publication.description}
              </p>

              {/* Keywords */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-foreground">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {publication.keywords.map((keyword, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Award className="w-4 h-4 mr-1 text-accent" />
                  Peer Reviewed
                </div>
                <button 
                  onClick={() => window.open(publication.link, "_blank")}
                  className="inline-flex items-center text-sm text-primary hover:text-primary-hover font-medium transition-colors"
                >
                  View Paper
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-muted/50 border border-border/30">
            <div className="flex items-center justify-center mb-3">
              <BookOpen className="w-6 h-6 text-accent mr-2" />
              <h3 className="text-lg font-semibold">Research Focus Areas</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              My research primarily focuses on the intersection of hardware and software optimization, 
              with particular emphasis on VLSI design, neural network acceleration, and energy-efficient computing systems.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["VLSI Design", "AI Hardware", "Low Power Computing", "Memory Systems", "Edge Computing"].map((area, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm">
                  {area}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Publications;