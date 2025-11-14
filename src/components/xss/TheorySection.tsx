import type * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TheorySectionProps {
  /**
   * Section title displayed in h2 tag
   */
  title: string;
  /**
   * Section content including text, code snippets, lists, and tables
   */
  children: React.ReactNode;
  /**
   * Optional anchor link id for deep linking
   */
  id?: string;
  /**
   * Optional additional CSS classes
   */
  className?: string;
}

/**
 * TheorySection component for displaying educational content sections
 * in the XSS learning page.
 *
 * Features:
 * - Semantic HTML with section and h2 tags
 * - Support for rich content (code snippets, lists, tables)
 * - Responsive design with Tailwind CSS
 * - Accessible with proper ARIA attributes
 * - Styled with shadcn/ui Card components
 *
 * @example
 * ```tsx
 * <TheorySection title="What is XSS?" id="what-is-xss">
 *   <p>Cross-Site Scripting (XSS) is a security vulnerability...</p>
 *   <pre><code>{'<script>alert("XSS")</script>'}</code></pre>
 * </TheorySection>
 * ```
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
          <CardTitle asChild>
            <h2
              id={id ? `${id}-title` : undefined}
              className="text-2xl font-bold tracking-tight"
            >
              {title}
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-stone dark:prose-invert max-w-none">
          {children}
        </CardContent>
      </Card>
    </section>
  );
}
