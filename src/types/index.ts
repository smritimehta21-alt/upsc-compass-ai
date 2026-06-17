export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface StudyTopic {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt: string;
}

export interface UserProgress {
  userId: string;
  topicId: string;
  status: 'not_started' | 'in_progress' | 'completed';
  score: number;
  lastStudied: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}
