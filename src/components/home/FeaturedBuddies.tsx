
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { users } from "@/data/mockData";

export const FeaturedBuddies = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Workout Buddies Near You
            </h2>
            <p className="text-muted-foreground">
              Find partners who match your fitness goals and schedule
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/buddies">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <Card key={user.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="h-32 bg-gradient-to-r from-workout-teal to-workout-light-blue"/>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex flex-col items-center -mt-12">
                  <Avatar className="h-24 w-24 border-4 border-background">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback className="bg-workout-teal text-white text-xl">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="mt-3 text-lg font-semibold">{user.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="mr-1 h-3 w-3" />
                    {user.location}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1 justify-center">
                    {user.workoutPreferences.slice(0, 2).map((pref, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {pref}
                      </Badge>
                    ))}
                    {user.workoutPreferences.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{user.workoutPreferences.length - 2}
                      </Badge>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-center line-clamp-2">{user.bio}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center border-t p-4">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to={`/buddies/${user.id}`}>View Profile</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
