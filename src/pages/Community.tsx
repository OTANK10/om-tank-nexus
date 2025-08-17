import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/enhanced-button";
import { Users, Heart, Award, ExternalLink } from "lucide-react";

const communityData = [
  {
    id: 1,
    title: "STEM Mentorship Program",
    role: "Founder & Lead Mentor",
    organization: "Local High Schools",
    period: "2022 - Present",
    impact: "Mentored 50+ students in engineering",
    description: "Founded a comprehensive mentorship program connecting university students with high school students interested in STEM careers. Developed curriculum and organized workshops on engineering fundamentals.",
    stats: {
      studentsImpacted: "50+",
      workshopsHeld: "25",
      collegeAcceptances: "85%"
    },
    image: "/api/placeholder/400/250",
    skills: ["Leadership", "Curriculum Development", "Public Speaking"]
  },
  {
    id: 2,
    title: "IEEE Student Chapter",
    role: "Vice President",
    organization: "University IEEE Branch",
    period: "2023 - 2024",
    impact: "Increased membership by 150%",
    description: "Led technical workshops and organized industry connections for engineering students. Coordinated with industry professionals to provide real-world project experiences.",
    stats: {
      newMembers: "200+",
      eventsOrganized: "15",
      industryPartnerships: "8"
    },
    image: "/api/placeholder/400/250",
    skills: ["Event Management", "Industry Relations", "Team Leadership"]
  },
  {
    id: 3,
    title: "Code for Good Hackathon",
    role: "Technical Judge & Mentor",
    organization: "Various Organizations",
    period: "2021 - Present",
    impact: "Evaluated 100+ social impact projects",
    description: "Provided technical guidance to teams developing solutions for social good. Focused on projects addressing education, healthcare, and environmental challenges.",
    stats: {
      hackathonsJudged: "12",
      teamsGuided: "30+",
      winningSolutions: "5"
    },
    image: "/api/placeholder/400/250",
    skills: ["Technical Assessment", "Project Mentoring", "Social Impact"]
  },
  {
    id: 4,
    title: "Digital Literacy Initiative",
    role: "Volunteer Instructor",
    organization: "Community Center",
    period: "2020 - 2022",
    impact: "Taught 200+ seniors basic computer skills",
    description: "Developed and delivered computer literacy programs for senior citizens, focusing on essential digital skills for modern life including internet safety and communication tools.",
    stats: {
      seniorsTaught: "200+",
      hoursVolunteered: "300+",
      programsCreated: "6"
    },
    image: "/api/placeholder/400/250",
    skills: ["Teaching", "Curriculum Design", "Community Outreach"]
  }
];

const Community = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Community <span className="gradient-text">Impact</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Committed to giving back through education, mentorship, and technology initiatives 
            that create lasting positive change in communities.
          </p>
        </div>


        {/* Community Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {communityData.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary/60 mb-2">
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                    </div>
                    <div className="text-sm text-muted-foreground">Project Image</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.role}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {project.period}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  
                  <div className="text-primary font-medium mb-2">
                    {project.organization}
                  </div>
                  
                  <div className="text-sm text-accent font-medium">
                    Impact: {project.impact}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="mb-4 p-3 bg-secondary/50 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Key Metrics</h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Skills Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Want to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always looking for opportunities to contribute to meaningful projects 
              and initiatives that make a positive impact in the community.
            </p>
            <Button variant="hero" size="lg">
              Get In Touch
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;