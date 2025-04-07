
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedBuddies } from "@/components/home/FeaturedBuddies";
import { FeaturedWorkouts } from "@/components/home/FeaturedWorkouts";

const Index = () => {
  return (
    <AppLayout>
      <HeroSection />
      <FeaturedBuddies />
      <FeaturedWorkouts />
    </AppLayout>
  );
};

export default Index;
