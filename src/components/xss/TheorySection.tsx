import type * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TheorySectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

/**
 * 学習ページの教育コンテンツセクションを表示するコンポーネント
 */
export function TheorySection({
  title,
  children,
  id,
  className,
}: TheorySectionProps) {
  return (
    <section
      id={id}
      className={cn("mb-8", className)}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <Card className="overflow-hidden">
        <CardHeader>
          <h2
            id={id ? `${id}-title` : undefined}
            className="text-2xl font-bold tracking-tight leading-none font-semibold"
          >
            {title}
          </h2>
        </CardHeader>
        <CardContent className="prose prose-stone dark:prose-invert max-w-none">
          {children}
        </CardContent>
      </Card>
    </section>
  );
}
