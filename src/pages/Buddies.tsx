
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, MapPin, UserPlus } from "lucide-react";
import { users } from "@/data/mockData";

const Buddies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterLevel, setFilterLevel] = useState<string>("");
  
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         user.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.workoutPreferences.some(pref => 
                           pref.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLevel = filterLevel ? user.level === filterLevel : true;
    
    return matchesSearch && matchesLevel;
  });
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">Find Workout Buddies</h1>
          <p className="text-muted-foreground">
            Connect with people who share your fitness goals and schedule
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by name, bio, or workout type..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Select value={filterLevel} onValueChange={setFilterLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <Card key={user.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={user.image} alt={user.name} />
                        <AvatarFallback className="bg-workout-teal text-white">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h3 className="font-medium text-lg">{user.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-3 w-3" />
                          {user.location}
                        </div>
                        <Badge variant="outline">{user.level}</Badge>
                      </div>
                    </div>
                    
                    <p className="text-sm mt-4 line-clamp-2">{user.bio}</p>
                    
                    <div className="mt-3">
                      <p className="text-sm font-medium">Workout preferences:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {user.workoutPreferences.map((pref, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {pref}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t flex justify-between items-center">
                      <div className="text-xs text-muted-foreground">
                        Available: {user.availability.join(", ")}
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/buddies/${user.id}`}>
                          <UserPlus className="h-4 w-4 mr-1" />
                          Connect
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No workout buddies match your search</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Buddies;
