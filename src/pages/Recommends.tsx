import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/enhanced-button";
import { Star, BookOpen, Film, Tv, ExternalLink, Calendar, Gamepad2 } from "lucide-react";

const recommendationsData = [
  {
    id: 1,
    title: "Succession",
    author: "HBO",
    type: "TV Show",
    category: "Drama",
    description: "The acting is absolutely out of this world and the story mirroring real-life media conglomerate families and the corporate world is just brilliant. A masterclass in character development and power dynamics.",
    image: "/lovable-uploads/b11fdddf-5e68-4094-b943-62e951cbe621.png",
    link: "https://share.google/wJkqxCQ2pXrdIehrX"
  },
  {
    id: 2,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    type: "Book",
    category: "Philosophy",
    description: "My first time interacting with Russian philosophy and clearly this is a hard-hitting one. A profound exploration of faith, doubt, and morality that challenges every assumption about human nature.",
    image: "/lovable-uploads/63234440-7b11-4bfb-a98e-979564ef1ddb.png",
    link: "https://share.google/zwGs8kuP4k9nmKJ8r"
  },
  {
    id: 3,
    title: "Expedition 33 Clair Obscur",
    author: "Sandfall Interactive",
    type: "Video Game",
    category: "Gaming",
    description: "I had not touched a video game since half a decade, and the hype around this made me try it. Absolutely mind blown how good a new gaming company made this game. From the soundtrack, to the story, to the character, to the art and the best of all the depiction of French art and culture. Absolute cinema.",
    image: "/lovable-uploads/69f1d39d-4b45-4744-b8d9-8ce54034981d.png",
    link: "https://share.google/SAV9iPDnhOjLZ224N"
  },
  {
    id: 4,
    title: "The Three-Body Problem",
    author: "Netflix",
    type: "TV Show",
    category: "Science Fiction",
    description: "Mind-bending hard science fiction that combines physics, computer science, and philosophy. The technical concepts are brilliantly woven into the narrative.",
    image: "/lovable-uploads/328a10fe-ce5e-4c58-be48-e00da6fd7a6c.png",
    link: "https://share.google/qWTltnAcfrrk3TgWl"
  },
  {
    id: 5,
    title: "The Last Question",
    author: "Isaac Asimov",
    type: "Book",
    category: "Science Fiction",
    description: "A profound short story spanning trillions of years, exploring humanity's quest to reverse entropy. Asimov's masterpiece that makes you ponder the ultimate fate of the universe.",
    image: "/lovable-uploads/the-last-question.png",
    link: "https://users.ece.cmu.edu/~gamvrosi/thelastq.html"
  }
];

const typeIcons = {
  Book: <BookOpen className="w-4 h-4" />,
  Movie: <Film className="w-4 h-4" />,
  "TV Show": <Tv className="w-4 h-4" />,
  "Video Game": <Gamepad2 className="w-4 h-4" />
};

const categoryColors = {
  Drama: "bg-red-500/10 text-red-700 border-red-200",
  Philosophy: "bg-indigo-500/10 text-indigo-700 border-indigo-200",
  Psychology: "bg-purple-500/10 text-purple-700 border-purple-200",
  Gaming: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
  "Science Fiction": "bg-blue-500/10 text-blue-700 border-blue-200",
  "Comedy/Tech": "bg-green-500/10 text-green-700 border-green-200",
  "Sci-Fi/AI": "bg-cyan-500/10 text-cyan-700 border-cyan-200",
  Programming: "bg-orange-500/10 text-orange-700 border-orange-200",
  "Sci-Fi/Drama": "bg-pink-500/10 text-pink-700 border-pink-200"
};

const Recommends = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Recommendations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recently discovered books, movies, and shows that have shaped my thinking, inspired creativity, 
            and provided valuable insights for both personal and professional growth.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left">
          <Badge variant="outline" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
            All Recommendations
          </Badge>
          {Object.keys(typeIcons).map((type) => (
            <Badge key={type} variant="outline" className="px-4 py-2">
              {typeIcons[type as keyof typeof typeIcons]}
              <span className="ml-2">{type}</span>
            </Badge>
          ))}
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendationsData.map((item, index) => (
            <Card 
              key={item.id}
              className="group overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image/Cover */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                {item.image && item.image.startsWith('/lovable-uploads/') ? (
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-primary/80 mb-2">
                        {item.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.type} Cover
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Type and Rating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {typeIcons[item.type as keyof typeof typeIcons]}
                    <span className="ml-1">{item.type}</span>
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-start mb-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${categoryColors[item.category as keyof typeof categoryColors]}`}
                    >
                      {item.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  
                  <div className="text-sm text-primary font-medium">
                    {item.author}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"
                  onClick={() => item.link && window.open(item.link, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>


        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <Card className="p-8 bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20">
            <h3 className="text-2xl font-bold mb-4">Recommend Me Something Good?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If my recommendations resonate with you or you'd like to discuss any of these books, 
              movies, or shows, I'd love to connect and hear your thoughts!
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/contact">Connect With Me</a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Recommends;