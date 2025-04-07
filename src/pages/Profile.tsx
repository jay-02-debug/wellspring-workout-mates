
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Users, Calendar, Edit, MapPin } from "lucide-react";
import { users } from "@/data/mockData";

// Mock user (in a real app this would come from authentication)
const currentUser = users[0];

const Profile = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={currentUser.image} alt={currentUser.name} />
                  <AvatarFallback className="bg-workout-teal text-white text-xl">
                    {currentUser.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h1 className="text-2xl font-bold">{currentUser.name}</h1>
                    <div className="flex items-center justify-center md:justify-start text-muted-foreground mt-1">
                      <MapPin className="mr-1 h-4 w-4" />
                      {currentUser.location}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Fitness Goals</h3>
                    <div className="flex flex-wrap gap-1 justify-center md:justify-start">
                      {currentUser.fitnessGoals.map((goal, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {goal}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Workout Preferences</h3>
                    <div className="flex flex-wrap gap-1 justify-center md:justify-start">
                      {currentUser.workoutPreferences.map((pref, i) => (
                        <Badge key={i} className="bg-workout-teal text-white text-xs">
                          {pref}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm">{currentUser.bio}</p>
                </div>
                
                <Button variant="outline" size="icon" className="rounded-full">
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit Profile</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="buddies" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="buddies">
                <Users className="h-4 w-4 mr-2" />
                My Buddies
              </TabsTrigger>
              <TabsTrigger value="schedule">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="buddies" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Workout Buddies</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center py-12">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      You haven't connected with any workout buddies yet
                    </p>
                    <Button asChild>
                      <a href="/buddies">Find Buddies</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="schedule" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">Availability</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentUser.availability.map((time, i) => (
                      <Badge key={i} variant="outline">
                        {time}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="font-semibold mb-2">Upcoming Workouts</h3>
                  <div className="text-center py-8 bg-muted/30 rounded-lg">
                    <p className="text-muted-foreground">
                      No upcoming workouts scheduled
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent className="text-center py-8">
                  <p className="text-muted-foreground">
                    Profile settings coming soon
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
