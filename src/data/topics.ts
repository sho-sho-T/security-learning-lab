import type { SecurityTopic } from "@/types/topic";

export const securityTopics: SecurityTopic[] = [
  {
    id: "xss",
    title: "XSS (クロスサイトスクリプティング)",
    description:
      "Webセキュリティの基本的な脆弱性。攻撃の仕組みと対策を学びます。",
    difficulty: "beginner",
    path: "/xss",
    icon: "🔓",
  },
];
