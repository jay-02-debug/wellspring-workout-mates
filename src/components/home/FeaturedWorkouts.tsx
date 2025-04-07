
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Heart, User } from "lucide-react";
import { workouts, users } from "@/data/mockData";

export const FeaturedWorkouts = () => {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Popular Workouts
            </h2>
            <p className="text-muted-foreground">
              Discover workout plans shared by the community
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/workouts">Browse All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => {
            const creator = users.find(user => user.id === workout.createdBy);
            
            return (
              <Card key={workout.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48 bg-muted">
                    <img 
                      src={workout.image} 
                      alt={workout.title} 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-workout-teal">{workout.difficulty}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {workout.duration} mins
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4 text-rose-500" />
                      <span className="text-sm">{workout.likes}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg">{workout.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {workout.description}
                  </p>
                  <div className="mt-4 flex items-center">
                    <User className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm">By {creator?.name || "Unknown"}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4">
                  <div className="flex flex-wrap gap-1">
                    {workout.category.map((cat, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild size="sm">
                    <Link to={`/workouts/${workout.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
