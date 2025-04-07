
import React from "react";
import { Dumbbell } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t py-6 bg-muted/30">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-5 w-5 text-workout-teal" />
          <p className="text-sm text-muted-foreground">
            © 2025 WorkoutMates. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary">
            Terms
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
