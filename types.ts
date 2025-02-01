export interface User {
    id: number
    name: string
    points: number
    level: number
    badge: string
    avatar: string
    timeTaken: string
    tasksCompleted: number
    expertise: string
}

export interface LoggedInUser {
    _id: string
    email: string
    name: string
    bio: string
    joinedDate: string
    tasksCompleted: number
    level: number
    lastSignIn: string
}

export interface LeaderboardData {
    currentUserId: number
    leaderboard: User[]
}

export interface Task {
    title: string
    prize: string
    image: string
    organizer: string
    organizerImage: string
    slug: string
    summary: string
    description: string
    participants: number
    taskDomains: string[]
    timeline: {
        date: string
        title: string
        description: string
    }[]
}
