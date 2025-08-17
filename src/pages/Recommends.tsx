import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/enhanced-button";
import { Star, BookOpen, Film, Tv, ExternalLink, Calendar } from "lucide-react";

const recommendationsData = [
  {
    id: 1,
    title: "Succession",
    author: "HBO",
    type: "TV Show",
    category: "Drama",
    dateWatched: "December 2024",
    description: "The acting is absolutely out of this world and the story mirroring real-life media conglomerate families and the corporate world is just brilliant. A masterclass in character development and power dynamics.",
    keyTakeaways: [
      "Complex family dynamics in business",
      "Corporate politics and media influence",
      "Masterful character development and dialogue"
    ],
    recommendedFor: "Business Students, Drama Enthusiasts",
    image: "/lovable-uploads/b11fdddf-5e68-4094-b943-62e951cbe621.png",
    link: "https://share.google/wJkqxCQ2pXrdIehrX"
  },
  {
    id: 2,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    type: "Book",
    category: "Psychology",
    dateRead: "March 2024",
    description: "A fascinating exploration of the two systems that drive how we think. Kahneman's insights into cognitive biases are incredibly relevant for engineering decision-making and problem-solving.",
    keyTakeaways: [
      "Understanding System 1 vs System 2 thinking",
      "Recognizing cognitive biases in technical decisions",
      "Improving probabilistic reasoning"
    ],
    recommendedFor: "Engineers, Researchers, Decision Makers",
    image: "/api/placeholder/300/400"
  },
  {
    id: 3,
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    type: "Book",
    category: "Science Fiction",
    dateRead: "February 2024",
    description: "Mind-bending hard science fiction that combines physics, computer science, and philosophy. The technical concepts are brilliantly woven into the narrative.",
    keyTakeaways: [
      "Creative application of physics concepts",
      "Thought-provoking technological scenarios",
      "Cultural perspectives on scientific progress"
    ],
    recommendedFor: "STEM Students, Sci-Fi Enthusiasts",
    image: "/api/placeholder/300/400"
  },
  {
    id: 4,
    title: "Silicon Valley",
    author: "HBO",
    type: "TV Show",
    category: "Comedy/Tech",
    dateWatched: "January 2024",
    description: "Hilarious and surprisingly accurate portrayal of tech startup culture. Great insights into the challenges of building technology companies and the personalities involved.",
    keyTakeaways: [
      "Understanding startup dynamics",
      "Technical challenges in scaling",
      "Importance of team culture"
    ],
    recommendedFor: "Tech Professionals, Entrepreneurs",
    image: "/api/placeholder/400/300"
  },
  {
    id: 5,
    title: "Ex Machina",
    author: "Alex Garland",
    type: "Movie",
    category: "Sci-Fi/AI",
    dateWatched: "December 2023",
    description: "Thought-provoking exploration of artificial intelligence, consciousness, and ethics. Particularly relevant for anyone working in AI or machine learning.",
    keyTakeaways: [
      "Ethics of AI development",
      "Questions about consciousness",
      "Human-machine interaction"
    ],
    recommendedFor: "AI Researchers, Philosophy Enthusiasts",
    image: "/api/placeholder/400/300"
  },
  {
    id: 6,
    title: "Clean Code",
    author: "Robert C. Martin",
    type: "Book",
    category: "Programming",
    dateRead: "November 2023",
    description: "Essential reading for any programmer. The principles apply beyond software to any engineering discipline where clarity and maintainability matter.",
    keyTakeaways: [
      "Writing readable and maintainable code",
      "Refactoring strategies",
      "Professional development practices"
    ],
    recommendedFor: "Programmers, Engineering Students",
    image: "/api/placeholder/300/400"
  },
  {
    id: 7,
    title: "Westworld",
    author: "HBO",
    type: "TV Show",
    category: "Sci-Fi/Drama",
    dateWatched: "October 2023",
    description: "Complex narrative exploring consciousness, free will, and the nature of reality. Excellent for thinking about AI ethics and the future of technology.",
    keyTakeaways: [
      "AI consciousness and ethics",
      "Narrative complexity and storytelling",
      "Philosophy of mind questions"
    ],
    recommendedFor: "AI Enthusiasts, Philosophy Students",
    image: "/api/placeholder/400/300"
  }
];

const typeIcons = {
  Book: <BookOpen className="w-4 h-4" />,
  Movie: <Film className="w-4 h-4" />,
  "TV Show": <Tv className="w-4 h-4" />
};

const categoryColors = {
  Drama: "bg-red-500/10 text-red-700 border-red-200",
  Psychology: "bg-purple-500/10 text-purple-700 border-purple-200",
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
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${categoryColors[item.category as keyof typeof categoryColors]}`}
                    >
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.dateRead || item.dateWatched}
                    </div>
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