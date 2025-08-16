import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/enhanced-button";
import { Camera, Music, Mountain, Code, Book, Gamepad2, ExternalLink } from "lucide-react";

const hobbiesData = [
  {
    id: 1,
    title: "Photography",
    icon: <Camera className="w-6 h-6" />,
    category: "Creative",
    description: "Passionate about capturing moments and landscapes. Specialized in street photography and nature shots, with a focus on geometric compositions and lighting.",
    highlights: [
      "Winner of University Photography Contest 2023",
      "500+ photos in personal portfolio",
      "Featured in local gallery exhibition"
    ],
    gear: ["Canon EOS R6", "24-70mm f/2.8", "Lightroom", "Photoshop"],
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    title: "Music Production",
    icon: <Music className="w-6 h-6" />,
    category: "Creative",
    description: "Creating electronic music and ambient soundscapes. Love experimenting with synthesizers and digital audio workstations to craft unique compositions.",
    highlights: [
      "Released 3 EPs on SoundCloud",
      "10,000+ plays across platforms",
      "Collaborated with 5 local artists"
    ],
    gear: ["Ableton Live", "Native Instruments", "Audio Interface", "Studio Monitors"],
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    title: "Rock Climbing",
    icon: <Mountain className="w-6 h-6" />,
    category: "Adventure",
    description: "Indoor and outdoor climbing enthusiast. Enjoy the mental and physical challenge of problem-solving on the wall, from bouldering to sport climbing.",
    highlights: [
      "Completed 50+ outdoor routes",
      "Lead climber (5.10+ grade)",
      "Member of university climbing team"
    ],
    gear: ["Climbing Shoes", "Harness", "Dynamic Rope", "Protection Gear"],
    image: "/api/placeholder/400/300"
  },
  {
    id: 4,
    title: "Open Source Contributing",
    icon: <Code className="w-6 h-6" />,
    category: "Technology",
    description: "Contributing to open-source projects, particularly in hardware simulation and EDA tools. Passionate about making engineering tools more accessible.",
    highlights: [
      "20+ contributions to major projects",
      "Maintainer of 2 popular repositories",
      "Helped fix 100+ bugs across projects"
    ],
    gear: ["GitHub", "VS Code", "Docker", "Various Programming Languages"],
    image: "/api/placeholder/400/300"
  },
  {
    id: 5,
    title: "Reading & Learning",
    icon: <Book className="w-6 h-6" />,
    category: "Intellectual",
    description: "Voracious reader with interests spanning from technical literature to science fiction. Always exploring new concepts and technologies.",
    highlights: [
      "Read 50+ books annually",
      "Technical blog with 1000+ readers",
      "Book club organizer"
    ],
    gear: ["Kindle", "Physical Books", "Notion for Notes", "Podcasts"],
    image: "/api/placeholder/400/300"
  },
  {
    id: 6,
    title: "Retro Gaming",
    icon: <Gamepad2 className="w-6 h-6" />,
    category: "Entertainment",
    description: "Collector and player of vintage video games. Fascinated by the evolution of gaming technology and the artistry of classic game design.",
    highlights: [
      "Collection of 200+ retro games",
      "Restored 5 vintage consoles",
      "Gaming history enthusiast"
    ],
    gear: ["Nintendo Systems", "Sega Consoles", "Arcade Cabinets", "Emulation Setups"],
    image: "/api/placeholder/400/300"
  }
];

const categoryColors = {
  Creative: "bg-purple-500/10 text-purple-700 border-purple-200",
  Adventure: "bg-green-500/10 text-green-700 border-green-200",
  Technology: "bg-blue-500/10 text-blue-700 border-blue-200",
  Intellectual: "bg-orange-500/10 text-orange-700 border-orange-200",
  Entertainment: "bg-pink-500/10 text-pink-700 border-pink-200"
};

const Hobbies = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hobbies & <span className="gradient-text">Interests</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond engineering and academics, I pursue diverse interests that fuel creativity, 
            challenge perspectives, and provide balance to life.
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

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbiesData.map((hobby, index) => (
            <Card 
              key={hobby.id}
              className="group overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-primary/60 mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {hobby.icon}
                    </div>
                    <div className="text-lg font-bold text-primary/80">
                      {hobby.title}
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${categoryColors[hobby.category as keyof typeof categoryColors]}`}
                  >
                    {hobby.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
                  {hobby.icon}
                  <span className="ml-2">{hobby.title}</span>
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {hobby.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Highlights</h4>
                  <ul className="space-y-1">
                    {hobby.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 font-bold">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gear/Tools */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Tools & Gear</h4>
                  <div className="flex flex-wrap gap-1">
                    {hobby.gear.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button variant="outline" size="sm" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Portfolio
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Fun Facts Section */}
        <div className="mt-16 animate-fade-in">
          <Card className="p-8 bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20">
            <h3 className="text-2xl font-bold text-center mb-6">Fun Facts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Photos Taken This Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Books Read Annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-orange mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Climbing Routes Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Open Source Contributions</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;