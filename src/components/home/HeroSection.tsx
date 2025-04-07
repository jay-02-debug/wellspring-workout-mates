
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Find Your Perfect Workout Buddy
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Connect with fitness enthusiasts who share your goals. Train together, stay motivated, and achieve more.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-workout-teal hover:bg-workout-teal/90">
                <Link to="/buddies">Find Buddies</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/workouts">Explore Workouts</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-workout-teal to-workout-light-blue p-1 md:h-[420px]">
              <div className="h-full w-full rounded-lg bg-muted flex items-center justify-center">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="animate-pulse-light text-5xl font-bold text-white">
                    250+
                  </div>
                  <div className="text-sm font-medium text-white">
                    Active workout buddies in your area
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
