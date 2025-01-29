export interface User {
  id: number;
  name: string;
  points: number;
  level: number;
  badge: string;
  avatar: string;
  timeTaken: string;
  tasksCompleted: number;
  expertise: string;
}

interface LeaderboardData {
  currentUserId: number;
  leaderboard: User[];
}

const leaderboardData: User[] = [
  {
    id: 1,
    name: "Alex Johnson",
    points: 1250,
    level: 5,
    badge: "🏆",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Alex",
    timeTaken: "2h 15m",
    tasksCompleted: 125,
    expertise: "Frontend",
  },
  {
    id: 2,
    name: "Sam Smith",
    points: 1100,
    level: 4,
    badge: "🥈",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Sam",
    timeTaken: "2h 30m",
    tasksCompleted: 110,
    expertise: "Backend",
  },
  {
    id: 3,
    name: "Emily Brown",
    points: 1000,
    level: 4,
    badge: "🥉",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Emily",
    timeTaken: "2h 45m",
    tasksCompleted: 100,
    expertise: "Full Stack",
  },
  {
    id: 4,
    name: "Chris Lee",
    points: 950,
    level: 3,
    badge: "",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Chris",
    timeTaken: "3h 00m",
    tasksCompleted: 95,
    expertise: "DevOps",
  },
  {
    id: 5,
    name: "Taylor Swift",
    points: 900,
    level: 3,
    badge: "",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Taylor",
    timeTaken: "3h 15m",
    tasksCompleted: 90,
    expertise: "Frontend",
  },
  {
    id: 6,
    name: "Jordan Patel",
    points: 850,
    level: 3,
    badge: "",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Jordan",
    timeTaken: "3h 30m",
    tasksCompleted: 85,
    expertise: "Backend",
  },
  {
    id: 7,
    name: "Casey Neistat",
    points: 800,
    level: 2,
    badge: "",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Casey",
    timeTaken: "3h 45m",
    tasksCompleted: 80,
    expertise: "Full Stack",
  },
  {
    id: 8,
    name: "Morgan Freeman",
    points: 750,
    level: 2,
    badge: "",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Morgan",
    timeTaken: "4h 00m",
    tasksCompleted: 75,
    expertise: "DevOps",
  },
  {
    id: 9,
    name: "Zoe Garcia",
    points: 700,
    level: 2,
    badge: "",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Zoe",
    timeTaken: "4h 15m",
    tasksCompleted: 70,
    expertise: "Frontend",
  },
  {
    id: 10,
    name: "Liam Neeson",
    points: 650,
    level: 1,
    badge: "",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Liam",
    timeTaken: "4h 30m",
    tasksCompleted: 65,
    expertise: "Backend",
  },
  {
    id: 11,
    name: "Emma Watson",
    points: 600,
    level: 1,
    badge: "",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Emma",
    timeTaken: "4h 45m",
    tasksCompleted: 60,
    expertise: "Full Stack",
  },
  {
    id: 12,
    name: "Tom Hanks",
    points: 550,
    level: 1,
    badge: "",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Tom",
    timeTaken: "5h 00m",
    tasksCompleted: 55,
    expertise: "DevOps",
  },
  {
    id: 13,
    name: "Scarlett Johansson",
    points: 500,
    level: 1,
    badge: "",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Scarlett",
    timeTaken: "5h 15m",
    tasksCompleted: 50,
    expertise: "Frontend",
  },
  {
    id: 14,
    name: "Chris Hemsworth",
    points: 450,
    level: 1,
    badge: "",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=ChrisH",
    timeTaken: "5h 30m",
    tasksCompleted: 45,
    expertise: "Backend",
  },
  {
    id: 15,
    name: "Natalie Portman",
    points: 400,
    level: 1,
    badge: "",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Natalie",
    timeTaken: "5h 45m",
    tasksCompleted: 40,
    expertise: "Full Stack",
  },
];

export async function fetchLeaderboardData(): Promise<LeaderboardData> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate getting the current user ID from the backend
  const currentUserId = Math.floor(Math.random() * leaderboardData.length) + 1;

  return {
    currentUserId,
    leaderboard: leaderboardData,
  };
}
