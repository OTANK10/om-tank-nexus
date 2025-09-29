import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/enhanced-button";
import { GraduationCap } from "lucide-react";
import umassLogo from "@/assets/umass-logo.png";
import cmuLogo from "@/assets/cmu-logo.jpg";

interface EducationDialogProps {
  children: React.ReactNode;
}

const EducationDialog = ({ children }: EducationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Carnegie Mellon University */}
          <div className="flex gap-6 p-4 rounded-lg border bg-card">
            <div className="flex-shrink-0">
              <img 
                src={cmuLogo} 
                alt="Carnegie Mellon University"
                className="w-24 h-24 object-contain rounded"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-primary">Carnegie Mellon University</h3>
              <p className="text-sm text-muted-foreground mb-2">College of Engineering</p>
              <p className="text-sm font-medium mb-1">Advanced Study MS in ECE</p>
              <p className="text-sm">Graduating: December 2027</p>
              <p className="text-sm text-muted-foreground">GPA: In Progress</p>
            </div>
          </div>

          {/* UMass Amherst */}
          <div className="flex gap-6 p-4 rounded-lg border bg-card">
            <div className="flex-shrink-0">
              <img 
                src={umassLogo} 
                alt="UMass Amherst - Riccio College of Engineering"
                className="w-24 h-24 object-contain rounded"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-primary">University of Massachusetts Amherst</h3>
              <p className="text-sm text-muted-foreground mb-2">Riccio College of Engineering</p>
              <p className="text-sm font-medium mb-1">Bachelor of Science in Computer Engineering</p>
              <p className="text-sm">Graduating: May 2025</p>
              <p className="text-sm text-accent font-medium">GPA: 3.7</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducationDialog;