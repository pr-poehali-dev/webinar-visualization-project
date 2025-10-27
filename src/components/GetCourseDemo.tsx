import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const lessons = [
  { id: 1, title: "Introduction to Premium Sales", duration: "12:34", completed: true, points: 100 },
  { id: 2, title: "Building Your Personal Brand", duration: "18:45", completed: true, points: 150 },
  { id: 3, title: "Advanced Conversion Tactics", duration: "24:12", completed: false, points: 200, locked: false },
  { id: 4, title: "Scaling Your Business", duration: "15:30", completed: false, points: 180, locked: true },
  { id: 5, title: "Million Dollar Mindset", duration: "20:15", completed: false, points: 250, locked: true }
];

const GetCourseDemo = () => {
  const [activeLesson, setActiveLesson] = useState(3);
  const [progress] = useState(42);

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-black border-primary/20">
            <div className="aspect-video relative bg-black">
              <img 
                src="https://cdn.poehali.dev/projects/d205c5b6-fda0-4aff-af54-36f56fac4a86/files/287d0cff-866b-40cf-ad40-d0df759207c8.jpg"
                alt="Course lesson"
                className="w-full h-full object-cover opacity-90"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 hover:scale-110 transition-transform">
                  <Icon name="Play" size={32} />
                </Button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center justify-between text-white text-sm">
                  <span>8:42</span>
                  <div className="flex-1 mx-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/3 animate-pulse" />
                  </div>
                  <span>24:12</span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Lesson 3: Advanced Conversion Tactics</h3>
                  <p className="text-muted-foreground">Master the art of turning leads into loyal customers</p>
                </div>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  +200 points
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span>24:12 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="FileText" size={16} className="text-primary" />
                  <span>3 assignments</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Award" size={16} className="text-primary" />
                  <span>Certificate available</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Icon name="Gift" className="text-primary" size={20} />
              Bonuses & Rewards
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 text-center">
                <Icon name="Trophy" size={28} className="text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">Achievement</div>
                <div className="text-xs text-muted-foreground">Complete all tasks</div>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 text-center">
                <Icon name="Star" size={28} className="text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">Bonus Material</div>
                <div className="text-xs text-muted-foreground">Unlock exclusive content</div>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 text-center">
                <Icon name="Zap" size={28} className="text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">Fast Track</div>
                <div className="text-xs text-muted-foreground">Skip to advanced</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Your Progress</h4>
              <Badge variant="outline" className="border-primary text-primary">
                {progress}%
              </Badge>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden mb-2">
              <div 
                className="h-full bg-gradient-to-r from-primary to-yellow-500 transition-all duration-1000 animate-shimmer"
                style={{ 
                  width: `${progress}%`,
                  backgroundSize: '200% 100%'
                }}
              />
            </div>
            <p className="text-xs text-muted-foreground">2 of 5 lessons completed</p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
            <h4 className="font-semibold mb-4">Course Curriculum</h4>
            <div className="space-y-2">
              {lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => !lesson.locked && setActiveLesson(lesson.id)}
                  disabled={lesson.locked}
                  className={cn(
                    "w-full p-3 rounded-lg border transition-all text-left",
                    activeLesson === lesson.id 
                      ? "bg-primary/20 border-primary/50" 
                      : "bg-card/30 border-primary/10 hover:border-primary/30",
                    lesson.locked && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                      lesson.completed 
                        ? "bg-green-500/20 border border-green-500/50"
                        : lesson.locked
                        ? "bg-gray-500/20 border border-gray-500/50"
                        : "bg-primary/20 border border-primary/50"
                    )}>
                      {lesson.completed ? (
                        <Icon name="Check" size={16} className="text-green-500" />
                      ) : lesson.locked ? (
                        <Icon name="Lock" size={16} className="text-gray-500" />
                      ) : (
                        <span className="text-xs font-bold text-primary">{lesson.id}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold mb-1">{lesson.title}</div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={12} />
                          {lesson.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Award" size={12} />
                          {lesson.points} pts
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/20 to-yellow-500/20 border-primary/30">
            <div className="text-center space-y-3">
              <Icon name="Trophy" size={40} className="text-primary mx-auto" />
              <div>
                <div className="text-2xl font-bold">450</div>
                <div className="text-sm text-muted-foreground">Total Points Earned</div>
              </div>
              <div className="text-xs text-muted-foreground">
                750 more points to unlock platinum status
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GetCourseDemo;
