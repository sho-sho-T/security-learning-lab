export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export interface SecurityTopic {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  path: string;
  icon: string;
}
