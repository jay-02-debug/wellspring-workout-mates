
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  LineChart as LineChartIcon,
  Clock,
  Flame,
  Calendar as CalendarIcon
} from "lucide-react";
import { ProgressChart } from "@/components/progress/ProgressChart";
import { progressData, workouts } from "@/data/mockData";

const Progress = () => {
  // Get the latest progress entry
  const latestProgress = [...progressData].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];
  
  const latestWorkout = workouts.find(w => w.id === latestProgress?.workoutId);
  
  // Calculate totals
  const totalCalories = progressData.reduce((sum, entry) => sum + entry.caloriesBurned, 0);
  const totalMinutes = progressData.reduce((sum, entry) => sum + entry.duration, 0);
  const totalWorkouts = progressData.length;
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">Your Progress</h1>
          <p className="text-muted-foreground">
            Track your fitness journey and see how far you've come
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Calories Burned</CardTitle>
                <Flame className="h-4 w-4 text-workout-teal" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalCalories}</div>
                <p className="text-xs text-muted-foreground">+{latestProgress?.caloriesBurned || 0} from last workout</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Workout Time</CardTitle>
                <Clock className="h-4 w-4 text-workout-teal" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalMinutes} mins</div>
                <p className="text-xs text-muted-foreground">Across {totalWorkouts} workouts</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Latest Workout</CardTitle>
                <CalendarIcon className="h-4 w-4 text-workout-teal" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{latestWorkout?.title || "None"}</div>
                <p className="text-xs text-muted-foreground">
                  {latestProgress ? new Date(latestProgress.date).toLocaleDateString() : "No workouts recorded"}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="chart" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="chart">
                <LineChartIcon className="h-4 w-4 mr-2" />
                Chart
              </TabsTrigger>
              <TabsTrigger value="calendar">
                <Calendar className="h-4 w-4 mr-2" />
                Calendar
              </TabsTrigger>
            </TabsList>
            <TabsContent value="chart" className="mt-4">
              <ProgressChart />
            </TabsContent>
            <TabsContent value="calendar" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Workout Calendar</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <p className="text-muted-foreground">
                    Calendar view coming soon
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Recent Workouts</h2>
            
            {progressData.length > 0 ? (
              <div className="space-y-4">
                {[...progressData]
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map(entry => {
                    const workout = workouts.find(w => w.id === entry.workoutId);
                    
                    return (
                      <Card key={entry.id} className="overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold">{workout?.title || "Unknown Workout"}</h3>
                              <p className="text-sm text-muted-foreground">
                                {new Date(entry.date).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-sm">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>{entry.duration} mins</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Flame className="h-4 w-4 text-rose-500" />
                                <span>{entry.caloriesBurned} cal</span>
                              </div>
                            </div>
                          </div>
                          {entry.notes && (
                            <p className="mt-4 text-sm border-t pt-4">
                              {entry.notes}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground">No workouts recorded yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Progress;
