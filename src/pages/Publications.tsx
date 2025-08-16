import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Award, ExternalLink } from "lucide-react";

const publicationsData = [
  {
    id: 1,
    title: "Squishy bioelectronic circuits",
    authors: "Alexandra Katsoulakis, Favour Nakyazze, Max Mchugh, Monil Bhavsar, Om Tank, Dmitry Kireev",
    venue: "Cellpress Devices",
    year: "2025",
    type: "Journal Paper",
    status: "Published",
    description: "This study introduces Squishy Circuits (SCs) as a promising low-cost biointerface electrode material for electrophysiological applications. SCs exhibit self-healing properties and show normalized impedance of 3.4 ± 0.6 kΩ at 1 kHz, which is 4 times lower than copper and 10 times lower than Ag/AgCl gel electrodes, with signal-to-noise ratios up to 115.",
    keywords: ["Bioelectronics", "Wearable Technology", "Electrophysiology", "Low-cost Sensors", "Self-healing Materials"],
    link: "https://www.cell.com/device/fulltext/S2666-9986(24)00475-7"
  },
  {
    id: 2,
    title: "Smart Shoes - First Steps in Bio-Mechanical Sensing",
    authors: "Om Tank, Malachi Mcknight, Owen Fedele, Mandy Peng, Jeremy Gummeson, Baird Soules, Margo Neely",
    venue: "IEEE Pervasive Computing Journal",
    year: "2026",
    type: "Journal Paper",
    status: "Under Review",
    description: "An open-access paper on the technology of the Neely 33 Smart Shoe, exploring innovative approaches to bio-mechanical sensing through intelligent wearable technology with integrated pressure sensors and real-time data processing capabilities.",
    keywords: ["Wearable Technology", "Bio-mechanical Sensing", "Smart Shoes", "Pervasive Computing", "Sensor Fusion"],
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
                {publication.status === 'Published' && (
                  <button 
                    onClick={() => window.open(publication.link, "_blank")}
                    className="inline-flex items-center text-sm text-primary hover:text-primary-hover font-medium transition-colors"
                  >
                    View Paper
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-muted/50 border border-border/30">
            <div className="flex items-center justify-center mb-3">
              <BookOpen className="w-6 h-6 text-accent mr-2" />
              <h3 className="text-lg font-semibold">Future Research Interests</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              My future research aims to explore new frontiers in VLSI and IC development by leveraging artificial intelligence 
              to revolutionize chip design methodologies, optimize circuit performance, and accelerate the development of 
              next-generation computing architectures for emerging applications.
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