
export interface User {
  id: string;
  name: string;
  image: string;
  location: string;
  bio: string;
  fitnessGoals: string[];
  workoutPreferences: string[];
  availability: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
}

export interface Workout {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string[];
  equipment: string[];
  createdBy: string;
  likes: number;
  image: string;
}

export interface Progress {
  id: string;
  userId: string;
  date: string;
  workoutId: string;
  duration: number;
  caloriesBurned: number;
  notes: string;
  feeling: "Great" | "Good" | "Okay" | "Tired" | "Exhausted";
}

export const users: User[] = [
  {
    id: "1",
    name: "Alex Chen",
    image: "/placeholder.svg",
    location: "San Francisco, CA",
    bio: "Fitness enthusiast looking for running partners on weekends.",
    fitnessGoals: ["Weight Loss", "Endurance"],
    workoutPreferences: ["Running", "HIIT", "Yoga"],
    availability: ["Weekday Evenings", "Weekend Mornings"],
    level: "Intermediate"
  },
  {
    id: "2",
    name: "Taylor Kim",
    image: "/placeholder.svg",
    location: "Boston, MA",
    bio: "Former college athlete trying to get back into shape.",
    fitnessGoals: ["Muscle Gain", "Strength"],
    workoutPreferences: ["Weight Training", "CrossFit"],
    availability: ["Early Mornings", "Weekend Afternoons"],
    level: "Advanced"
  },
  {
    id: "3",
    name: "Jordan Smith",
    image: "/placeholder.svg",
    location: "Chicago, IL",
    bio: "Beginner looking for a workout buddy to stay motivated.",
    fitnessGoals: ["General Fitness", "Flexibility"],
    workoutPreferences: ["Walking", "Cycling", "Pilates"],
    availability: ["Weekday Lunch", "Weekend Evenings"],
    level: "Beginner"
  },
  {
    id: "4",
    name: "Casey Johnson",
    image: "/placeholder.svg",
    location: "Austin, TX",
    bio: "Training for my first marathon! Looking for running partners.",
    fitnessGoals: ["Endurance", "Performance"],
    workoutPreferences: ["Running", "Swimming"],
    availability: ["Weekday Mornings", "Weekend Mornings"],
    level: "Intermediate"
  }
];

export const workouts: Workout[] = [
  {
    id: "1",
    title: "30-Minute HIIT Blast",
    description: "High-intensity interval training to boost your metabolism and burn calories.",
    duration: 30,
    difficulty: "Intermediate",
    category: ["HIIT", "Cardio"],
    equipment: ["None"],
    createdBy: "1",
    likes: 45,
    image: "/placeholder.svg"
  },
  {
    id: "2",
    title: "Full Body Strength",
    description: "Complete full-body workout focusing on all major muscle groups.",
    duration: 45,
    difficulty: "Intermediate",
    category: ["Strength", "Weight Training"],
    equipment: ["Dumbbells", "Resistance Bands"],
    createdBy: "2",
    likes: 32,
    image: "/placeholder.svg"
  },
  {
    id: "3",
    title: "Beginner Running Plan",
    description: "Perfect for beginners who want to build endurance gradually.",
    duration: 25,
    difficulty: "Beginner",
    category: ["Running", "Cardio"],
    equipment: ["None"],
    createdBy: "4",
    likes: 28,
    image: "/placeholder.svg"
  },
  {
    id: "4",
    title: "Power Yoga Flow",
    description: "Energizing yoga session that combines strength and flexibility.",
    duration: 60,
    difficulty: "Intermediate",
    category: ["Yoga", "Flexibility"],
    equipment: ["Yoga Mat"],
    createdBy: "1",
    likes: 39,
    image: "/placeholder.svg"
  }
];

export const progressData: Progress[] = [
  {
    id: "1",
    userId: "1",
    date: "2025-04-05",
    workoutId: "1",
    duration: 35,
    caloriesBurned: 320,
    notes: "Pushed myself harder today, felt great afterward!",
    feeling: "Great"
  },
  {
    id: "2",
    userId: "1",
    date: "2025-04-03",
    workoutId: "4",
    duration: 55,
    caloriesBurned: 240,
    notes: "Focused on improving flexibility",
    feeling: "Good"
  },
  {
    id: "3",
    userId: "1",
    date: "2025-04-01",
    workoutId: "1",
    duration: 30,
    caloriesBurned: 285,
    notes: "Felt tired but completed the workout",
    feeling: "Tired"
  }
];
