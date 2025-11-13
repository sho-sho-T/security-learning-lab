import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { SecurityTopic } from "@/types/topic";

interface TopicCardProps {
  topic: SecurityTopic;
}

/**
 * Get badge variant and color based on difficulty level
 */
function getDifficultyVariant(difficulty: SecurityTopic["difficulty"]): {
  variant: "default" | "secondary" | "destructive";
  className: string;
} {
  switch (difficulty) {
    case "beginner":
      return {
        variant: "default",
        className:
          "bg-green-500 hover:bg-green-600 text-white border-green-600",
      };
    case "intermediate":
      return {
        variant: "default",
        className:
          "bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-600",
      };
    case "advanced":
      return {
        variant: "destructive",
        className: "",
      };
  }
}

/**
 * Get display label for difficulty level
 */
function getDifficultyLabel(difficulty: SecurityTopic["difficulty"]): string {
  switch (difficulty) {
    case "beginner":
      return "初級";
    case "intermediate":
      return "中級";
    case "advanced":
      return "上級";
  }
}

/**
 * TopicCard component displays a security topic with icon, title, description,
 * and difficulty badge. Clicking the card navigates to the topic detail page.
 */
export function TopicCard({ topic }: TopicCardProps) {
  const difficultyConfig = getDifficultyVariant(topic.difficulty);
  const difficultyLabel = getDifficultyLabel(topic.difficulty);

  return (
    <Link href={topic.path} className="block">
      <Card
        className={cn(
          "h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1",
          "cursor-pointer group",
        )}
      >
        <CardHeader>
          <div className="flex items-center gap-3">
            <span className="text-4xl" role="img" aria-label={topic.title}>
              {topic.icon}
            </span>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {topic.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            {topic.description}
          </CardDescription>
          <div className="mt-4">
            <Badge
              variant={difficultyConfig.variant}
              className={difficultyConfig.className}
            >
              {difficultyLabel}
            </Badge>
          </div>
        </CardContent>
        <CardFooter>
          <span className="text-sm font-medium text-primary group-hover:underline">
            学習を始める →
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
