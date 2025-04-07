
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, Heart, User, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { workouts, users } from "@/data/mockData";

const categories = ["All", "HIIT", "Cardio", "Strength", "Yoga", "Running", "Weight Training"];

const Workouts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredWorkouts = workouts.filter(workout => {
    const matchesSearch = workout.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         workout.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All" ? 
                           true : 
                           workout.category.includes(activeCategory);
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">Discover Workouts</h1>
          <p className="text-muted-foreground">
            Find workout plans shared by the community or create your own
          </p>
          
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search workouts..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-workout-teal hover:bg-workout-teal/90">
              <Link to="/workouts/create">Create Workout</Link>
            </Button>
          </div>
          
          <Tabs defaultValue="All" value={activeCategory} onValueChange={setActiveCategory} className="w-full mt-6">
            <TabsList className="w-full overflow-auto">
              {categories.map(category => (
                <TabsTrigger key={category} value={category} className="text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredWorkouts.length > 0 ? (
              filteredWorkouts.map((workout) => {
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
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No workouts match your search</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Workouts;
