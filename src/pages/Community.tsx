import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/enhanced-button";
import { Users, Heart, Award, ExternalLink } from "lucide-react";

const communityData = [
  {
    id: 1,
    title: "Indian Student Union",
    role: "Founder & Senior Events Coordinator",
    organization: "UMass Amherst",
    period: "Fall 2022 - Summer 2025",
    impact: "Founded and scaled to over 850 active members",
    description: "Founded and scaled the organization to over 850 active members, fostering a thriving community that celebrates Indian and South Asian culture. Planned and executed high-impact cultural events, including Fashion Ka Jalwa and the ISU Gala recognizing community achievements through awards and performances.",
    stats: {
      activeMembers: "850+",
      eventsPlanned: "15+",
      culturalShowcases: "8"
    },
    image: "/lovable-uploads/8c5e2802-f890-4c9d-88e5-8da94939359d.png",
    skills: ["Event Management", "Community Building", "Cultural Programming"]
  },
  {
    id: 2,
    title: "Interact Club",
    role: "STEM Educator & Community Volunteer",
    organization: "The Galaxy Education System, India",
    period: "2018 - 2021",
    impact: "Educated 150+ underprivileged children in STEM",
    description: "Worked as a STEM educator for less fortunate children, developing creative learning programs and hands-on activities. During COVID-19, took initiatives to spread awareness about the disease and its prevention while continuing educational support through safe methods.",
    stats: {
      childrenTaught: "150+",
      covidAwareness: "500+",
      educationPrograms: "12"
    },
    image: "/lovable-uploads/dcb03e8a-5c95-4ad7-b36a-c180ae2dfec8.png",
    skills: ["STEM Education", "Community Outreach", "Health Awareness"]
  },
  {
    id: 3,
    title: "Cooking Club",
    role: "Active Member & Cultural Coordinator",
    organization: "UMass Amherst",
    period: "2022 - 2024",
    impact: "Facilitated cultural exchange through cuisine",
    description: "Active member who met weekly to explore diverse cuisines and foster cultural exchange. Introduced new recipes once a semester to the group, managed ingredient procurement, and helped members share their cultural cuisines, creating a welcoming space for culinary diversity.",
    stats: {
      recipesIntroduced: "8+",
      weeklyMeetings: "100+",
      culturalDishes: "25+"
    },
    image: "/lovable-uploads/e02fb684-5dce-4947-8969-0734f385bc19.png",
    skills: ["Cultural Exchange", "Event Coordination", "Recipe Development"],
    link: "https://umassamherst.campuslabs.com/engage/organization/umasscookingclub"
  },
  {
    id: 4,
    title: "Powerlifting Club",
    role: "Active Member",
    organization: "UMass Amherst",
    period: "2021 - 2023",
    impact: "Competed at state level collegiate competition",
    description: "Active member who regularly attended group meetings and shared training plans with fellow athletes. Participated in one state level collegiate competition, fostering camaraderie and team spirit within the powerlifting community.",
    stats: {
      meetingsAttended: "50+",
      competitionsParticipated: "1",
      teamMembers: "30+"
    },
    image: "/lovable-uploads/025b5d77-315d-4592-9eb4-c960da730de7.png",
    skills: ["Athletic Training", "Team Collaboration", "Competition Preparation"],
    link: "https://umassamherst.campuslabs.com/engage/organization/umpl"
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
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                {project.image.startsWith('/lovable-uploads/') ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary/60 mb-2">
                        {project.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                      </div>
                      <div className="text-sm text-muted-foreground">Project Image</div>
                    </div>
                  </div>
                )}
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
                {project.id !== 2 && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => project.link && window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                )}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Connect With Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/hobbies">Explore My Hobbies</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;