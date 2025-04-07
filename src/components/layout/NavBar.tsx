
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dumbbell, Users, LineChart, User } from "lucide-react";

export const NavBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Dumbbell className="h-6 w-6 text-workout-teal" />
          <Link to="/" className="font-heading">
            WorkoutMates
          </Link>
        </div>
        
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link to="/buddies" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
              <Users className="h-4 w-4" />
              <span>Find Buddies</span>
            </Link>
            <Link to="/workouts" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
              <Dumbbell className="h-4 w-4" />
              <span>Workouts</span>
            </Link>
            <Link to="/progress" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
              <LineChart className="h-4 w-4" />
              <span>Progress</span>
            </Link>
          </div>
          
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link to="/profile">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
