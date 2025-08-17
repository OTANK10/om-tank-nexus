import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/enhanced-button";
import { ChefHat, Mountain, Cpu, Target, Dumbbell } from "lucide-react";

const hobbiesData = [
  {
    id: 1,
    title: "Cooking",
    icon: <ChefHat className="w-6 h-6" />,
    description: "Passionate about exploring diverse cuisines and experimenting with flavors from around the world. From traditional Indian dishes to international fusion, I love creating memorable culinary experiences and sharing them with friends through cooking sessions and cultural exchanges.",
    highlights: [
      "Introduced 8+ new recipes to UMass Cooking Club",
      "Organized weekly cooking sessions (2022-2024)",
      "Specialized in fusion and traditional cuisines"
    ],
    images: [
      "/lovable-uploads/df1ed70f-097b-412e-87e2-53216f018661.png",
      "/lovable-uploads/d93f98d1-1ea7-47ae-b1e6-e068b0baf912.png",
      "/lovable-uploads/770264c3-95a3-4eb7-a934-cd3b59a8b123.png"
    ],
    mainImage: "/lovable-uploads/df1ed70f-097b-412e-87e2-53216f018661.png"
  },
  {
    id: 2,
    title: "Trekking & Hiking",
    icon: <Mountain className="w-6 h-6" />,
    description: "Love exploring nature's beauty through challenging treks and scenic hikes. Whether it's conquering mountain peaks or discovering hidden trails, trekking provides the perfect escape and physical challenge while connecting with the natural world.",
    highlights: [
      "Completed multiple challenging mountain treks",
      "Regular weekend hiking enthusiast",
      "Nature photography during expeditions"
    ],
    mainImage: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Mechatronics Projects",
    icon: <Cpu className="w-6 h-6" />,
    description: "Fascinated by the intersection of mechanical, electrical, and software engineering. I enjoy building autonomous systems, robotics projects, and IoT devices that solve real-world problems through innovative mechatronic solutions.",
    highlights: [
      "Built multiple autonomous robot systems",
      "IoT device development and prototyping",
      "Integration of sensors and actuators"
    ],
    mainImage: "/api/placeholder/600/400"
  },
  {
    id: 4,
    title: "Rainbow 6 Siege Esports",
    icon: <Target className="w-6 h-6" />,
    description: "During COVID-19, I reached near-professional level in Rainbow 6 Siege and almost joined a competitive SEA (Southeast Asia) team. The tactical depth, team coordination, and strategic thinking required in this game provided an intense and rewarding competitive experience.",
    highlights: [
      "Nearly achieved professional status during COVID",
      "Considered for SEA competitive team",
      "High-level tactical gameplay and strategy"
    ],
    mainImage: "/api/placeholder/600/400"
  },
  {
    id: 5,
    title: "Powerlifting",
    icon: <Dumbbell className="w-6 h-6" />,
    description: "Dedicated to the sport of powerlifting, focusing on the three main lifts: squat, bench press, and deadlift. Member of UMass Powerlifting Club (2021-2023), where I trained consistently, competed at state level, and built lasting friendships through our shared passion for strength training.",
    highlights: [
      "UMass Powerlifting Club member (2021-2023)",
      "Competed in state level collegiate competition",
      "Consistent strength training and progression"
    ],
    images: [
      "/lovable-uploads/e4c07ea3-dcfc-448a-bfbe-bdb2f64ef6cf.png",
      "/lovable-uploads/401221ce-8899-46ae-969c-d2735f265fc2.png",
      "/lovable-uploads/025b5d77-315d-4592-9eb4-c960da730de7.png"
    ],
    mainImage: "/lovable-uploads/e4c07ea3-dcfc-448a-bfbe-bdb2f64ef6cf.png"
  }
];

const Hobbies = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hobbies & <span className="gradient-text">Interests</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond engineering and academics, I pursue diverse interests that fuel creativity, 
            challenge perspectives, and provide balance to life.
          </p>
        </div>

        {/* Hobbies Alternating Layout */}
        <div className="space-y-16">
          {hobbiesData.map((hobby, index) => (
            <div 
              key={hobby.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Section */}
              <div className="flex-1 w-full">
                <div className="relative overflow-hidden rounded-lg shadow-strong">
                  {hobby.images ? (
                    hobby.title === "Cooking" ? (
                      // Cooking layout
                      <div className="grid grid-cols-2 gap-2">
                        <img 
                          src={hobby.images[0]} 
                          alt={`${hobby.title} - Shakshuka and Dutch Baby`}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="grid grid-rows-2 gap-2">
                          <img 
                            src={hobby.images[1]} 
                            alt={`${hobby.title} - Pav Bhaji`}
                            className="w-full h-[7.5rem] object-cover rounded-lg"
                          />
                          <img 
                            src={hobby.images[2]} 
                            alt={`${hobby.title} - Rice Bowl`}
                            className="w-full h-[7.5rem] object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    ) : (
                      // Powerlifting layout
                      <div className="grid grid-cols-2 gap-2">
                        <div className="grid grid-rows-2 gap-2">
                          <img 
                            src={hobby.images[0]} 
                            alt={`${hobby.title} - Bench Press`}
                            className="w-full h-[7.5rem] object-cover rounded-lg"
                          />
                          <img 
                            src={hobby.images[1]} 
                            alt={`${hobby.title} - Deadlift`}
                            className="w-full h-[7.5rem] object-cover rounded-lg"
                          />
                        </div>
                        <img 
                          src={hobby.images[2]} 
                          alt={`${hobby.title} - UMass Powerlifting Team`}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    )
                  ) : hobby.mainImage.startsWith('/lovable-uploads/') ? (
                    <img 
                      src={hobby.mainImage} 
                      alt={hobby.title}
                      className="w-full h-80 object-cover"
                    />
                  ) : (
                    <div className="h-80 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-primary/60 mb-4 flex justify-center">
                          {hobby.icon}
                        </div>
                        <div className="text-2xl font-bold text-primary/60">{hobby.title}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 w-full">
                <Card className="p-8 h-full shadow-medium">
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3">
                      {hobby.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{hobby.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {hobby.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">Highlights</h4>
                    <ul className="space-y-2">
                      {hobby.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2 font-bold">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation to other sections */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Explore More</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover more about my journey through my community work, projects, and recommendations.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/community">View Community Impact</a>
            </Button>
          </Card>
          
          <div className="mt-8">
            <Button variant="outline" size="lg" asChild>
              <a href="/projects">Explore My Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;