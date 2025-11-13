# shadcn/ui Installation Guide with Bun

This guide provides comprehensive instructions for installing and using shadcn/ui components in this Next.js 16 + React 19 + TailwindCSS v4 project with Bun as the package manager.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Installation Methods](#installation-methods)
4. [Available Components](#available-components)
5. [Usage Examples](#usage-examples)
6. [Troubleshooting](#troubleshooting)
7. [Best Practices](#best-practices)

## Prerequisites

### Required Software

Before installing shadcn/ui components, ensure you have the following software installed:

#### 1. Node.js
- **Version**: v20 or higher
- **Installation**: Download from [nodejs.org](https://nodejs.org/)
- **Verification**:
  ```bash
  node --version  # Should show v20.x or higher
  ```

#### 2. Bun (Recommended Package Manager)
- **Version**: Latest stable version
- **Installation**:
  ```bash
  # macOS, Linux, and WSL
  curl -fsSL https://bun.sh/install | bash

  # Windows (PowerShell)
  irm bun.sh/install.ps1 | iex
  ```
- **Verification**:
  ```bash
  bun --version  # Should show the installed version
  ```

**Note**: While Bun is recommended for this project, you can also use npm, yarn, or pnpm.

### Project Setup

This project already has the following configured:

- ✅ **Next.js 16** with App Router
- ✅ **React 19.2.0**
- ✅ **TailwindCSS v4** with PostCSS
- ✅ **TypeScript 5**
- ✅ **shadcn/ui configuration** (`components.json`)

## Initial Setup

### 1. Understanding the Configuration

The project includes a `components.json` file that defines the shadcn/ui setup:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "stone",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

**Key Configuration Points**:
- **Style**: "new-york" - Modern, refined component style
- **RSC**: Enabled - Components are React Server Component compatible
- **Base Color**: "stone" - Neutral color palette
- **CSS Variables**: Enabled for dynamic theming
- **Icon Library**: lucide-react for consistent icons

### 2. Core Dependencies

The following dependencies are required and already installed:

```json
{
  "dependencies": {
    "@radix-ui/react-slot": "^1.2.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.552.0",
    "tailwind-merge": "^3.3.1"
  }
}
```

### 3. Utility Function

The project includes a `cn()` utility function for merging Tailwind classes:

**Location**: `src/lib/utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Installation Methods

### Method 1: Using the shadcn CLI (Recommended)

The shadcn CLI automatically handles component installation, dependency management, and file placement.

#### Installing Individual Components with Bun

```bash
# Install a specific component
npx shadcn@latest add button

# Install multiple components at once
npx shadcn@latest add button card input

# Install a component and its dependencies
npx shadcn@latest add form
```

**Note**: Even when using Bun as your package manager, you should use `npx` (not `bunx`) for the shadcn CLI, as the CLI will respect your project's package manager configuration.

#### What Happens During Installation

When you run the add command:

1. **Dependency Check**: Installs required peer dependencies (e.g., `@radix-ui/*` packages)
2. **Component Creation**: Creates the component file in `src/components/ui/`
3. **Type Safety**: Includes full TypeScript types
4. **Customization**: Uses your `components.json` configuration

### Method 2: Installing All Components

To install all available components at once:

```bash
npx shadcn@latest add --all
```

**Warning**: This will add many files and dependencies. Only use if you need most components.

### Method 3: Manual Installation

For advanced users who want more control:

1. **Install Dependencies**:
   ```bash
   bun add @radix-ui/react-[component-name]
   ```

2. **Copy Component Code**: 
   - Visit [ui.shadcn.com](https://ui.shadcn.com)
   - Navigate to the desired component
   - Copy the source code
   - Create file in `src/components/ui/[component-name].tsx`
   - Paste and adjust imports if needed

## Available Components

shadcn/ui provides a rich collection of accessible, customizable components:

### Form Components
- **Button**: Versatile button with multiple variants
- **Input**: Text input with validation support
- **Textarea**: Multi-line text input
- **Select**: Dropdown selection
- **Checkbox**: Toggle selection
- **Radio Group**: Single selection from options
- **Switch**: Toggle switch
- **Slider**: Value selection via slider
- **Form**: Complete form handling with validation

### Layout Components
- **Card**: Content container with header/footer
- **Separator**: Visual divider
- **Tabs**: Tabbed navigation
- **Accordion**: Collapsible content sections
- **Sheet**: Slide-out panel
- **Dialog**: Modal dialog
- **Drawer**: Bottom drawer (mobile-friendly)

### Navigation Components
- **Navigation Menu**: Accessible navigation
- **Breadcrumb**: Hierarchical navigation
- **Pagination**: Page navigation
- **Menubar**: Application menubar
- **Command**: Command palette/search

### Feedback Components
- **Alert**: Attention-grabbing messages
- **Alert Dialog**: Confirmation dialogs
- **Toast**: Temporary notifications
- **Progress**: Progress indicator
- **Skeleton**: Loading placeholders
- **Spinner**: Loading spinner
- **Badge**: Status indicators

### Data Display
- **Table**: Data tables
- **Avatar**: User avatars
- **Calendar**: Date selection
- **Carousel**: Image/content carousel
- **Chart**: Data visualization (with Recharts)
- **Tooltip**: Contextual information
- **Popover**: Floating content
- **Hover Card**: Rich hover content

### Utility Components
- **Aspect Ratio**: Maintain aspect ratios
- **Collapsible**: Expandable content
- **Context Menu**: Right-click menus
- **Dropdown Menu**: Action menus
- **Scroll Area**: Custom scrollbars
- **Resizable**: Resizable panels
- **Toggle**: Toggle button
- **Toggle Group**: Grouped toggles

**Note**: Visit [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components) for the complete list with live examples.

## Usage Examples

### Example 1: Adding and Using a Button

#### Step 1: Install the Button Component
```bash
npx shadcn@latest add button
```

#### Step 2: Use in Your Component
```tsx
// src/app/example/page.tsx
import { Button } from "@/components/ui/button";

export default function ExamplePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Button Examples</h1>
      
      {/* Default button */}
      <Button>Click me</Button>
      
      {/* Different variants */}
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      
      {/* Different sizes */}
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      
      {/* With icon */}
      <Button>
        <svg className="mr-2 h-4 w-4" />
        With Icon
      </Button>
    </div>
  );
}
```

### Example 2: Creating a Form with Multiple Components

#### Step 1: Install Required Components
```bash
npx shadcn@latest add form input button label
```

#### Step 2: Create a Contact Form
```tsx
// src/components/contact-form.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your name"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email"
        />
      </div>
      
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Example 3: Using Cards for Layout

#### Step 1: Install Card Component
```bash
npx shadcn@latest add card
```

#### Step 2: Create a Card Layout
```tsx
// src/components/topic-card.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TopicCardProps {
  title: string;
  description: string;
  href: string;
}

export function TopicCard({ title, description, href }: TopicCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Click below to start learning
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={href}>Start Learning</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
```

### Example 4: Adding Notifications with Toast

#### Step 1: Install Toast and Sonner
```bash
npx shadcn@latest add toast
bun add sonner
```

#### Step 2: Setup Toast Provider
```tsx
// src/app/layout.tsx
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
```

#### Step 3: Use Toast in Components
```tsx
"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function NotificationExample() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success",
          description: "Your changes have been saved.",
        });
      }}
    >
      Show Notification
    </Button>
  );
}
```

### Example 5: Customizing Component Styles

You can customize components using the `cn()` utility:

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CustomButton() {
  return (
    <Button 
      className={cn(
        "rounded-full",
        "bg-gradient-to-r from-blue-500 to-purple-600",
        "hover:from-blue-600 hover:to-purple-700",
        "transition-all duration-300"
      )}
    >
      Custom Styled Button
    </Button>
  );
}
```

## Troubleshooting

### Common Issues and Solutions

#### 1. "Module not found" Error

**Problem**: 
```
Error: Cannot find module '@/components/ui/button'
```

**Solution**:
- Verify the component file exists at `src/components/ui/button.tsx`
- Check `tsconfig.json` has the path alias configured:
  ```json
  {
    "compilerOptions": {
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }
  ```
- Restart your development server: `bun dev`

#### 2. TypeScript Errors with Component Props

**Problem**: 
```
Type 'X' is not assignable to type 'Y'
```

**Solution**:
- Ensure you have the latest type definitions:
  ```bash
  bun add -d @types/react @types/react-dom
  ```
- Check that your TypeScript version is compatible:
  ```bash
  bun add -d typescript@latest
  ```

#### 3. Styling Not Applied

**Problem**: Components render but styles don't apply

**Solution**:
- Verify TailwindCSS is properly configured in `src/app/globals.css`:
  ```css
  @import "tailwindcss";
  ```
- Check that your component uses the `cn()` utility correctly
- Ensure CSS variables are defined in `globals.css`
- Clear Next.js cache and rebuild:
  ```bash
  rm -rf .next
  bun dev
  ```

#### 4. Peer Dependency Warnings

**Problem**: 
```
warning: peer dependency @radix-ui/react-* not installed
```

**Solution**:
- Install the missing peer dependency:
  ```bash
  bun add @radix-ui/react-[missing-package]
  ```
- Or reinstall the component:
  ```bash
  npx shadcn@latest add [component-name]
  ```

#### 5. Import Errors with Biome Linter

**Problem**: 
```
lint/style/useImportType: All these imports are only used as types
```

**Solution**:
- Run the formatter to auto-fix:
  ```bash
  bun run format
  ```
- Or manually change imports to type imports:
  ```tsx
  import type * as React from "react";
  ```

#### 6. Component Not Updating After Changes

**Problem**: Changes to components don't reflect in the browser

**Solution**:
- Stop the dev server (Ctrl+C)
- Clear the Next.js cache:
  ```bash
  rm -rf .next
  ```
- Restart the dev server:
  ```bash
  bun dev
  ```

#### 7. Bun vs npm Compatibility

**Problem**: Some commands don't work with Bun

**Solution**:
- For shadcn CLI, always use `npx`:
  ```bash
  npx shadcn@latest add button  # ✅ Correct
  bunx shadcn@latest add button  # ❌ May not work
  ```
- For installing packages, use `bun add`:
  ```bash
  bun add lucide-react  # ✅ Correct
  npm install lucide-react  # ❌ Mixing package managers
  ```

#### 8. "use client" Directive Issues

**Problem**: 
```
Error: useState only works in Client Components
```

**Solution**:
- Add `"use client"` directive at the top of the file:
  ```tsx
  "use client";
  
  import { useState } from "react";
  // ... rest of your component
  ```

## Best Practices

### 1. Component Organization

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (managed by CLI)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/          # Layout components
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── features/        # Feature-specific components
│       └── contact-form.tsx
```

### 2. Importing Components

Always use the `@/` alias for cleaner imports:

```tsx
// ✅ Good
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ❌ Avoid
import { Button } from "../../../components/ui/button";
```

### 3. Customizing Components

Create wrapper components instead of modifying shadcn/ui files directly:

```tsx
// src/components/custom/primary-button.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PrimaryButton({ className, ...props }) {
  return (
    <Button
      className={cn("bg-primary hover:bg-primary/90", className)}
      {...props}
    />
  );
}
```

### 4. Type Safety

Always define prop types for your custom components:

```tsx
interface CustomCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export function CustomCard({ 
  title, 
  description, 
  children,
  className 
}: CustomCardProps) {
  // Component implementation
}
```

### 5. Accessibility

shadcn/ui components are built with accessibility in mind, but ensure you:

- Provide proper labels for form inputs
- Use semantic HTML elements
- Add ARIA attributes when needed
- Test with keyboard navigation
- Check color contrast ratios

### 6. Performance

- Only install components you actually use
- Use React Server Components (RSC) when possible
- Add `"use client"` only when necessary (for hooks, events, etc.)
- Lazy load large components:
  ```tsx
  const HeavyComponent = dynamic(() => import("@/components/heavy-component"));
  ```

### 7. Theming

Leverage CSS variables for consistent theming:

```css
/* src/app/globals.css */
@theme inline {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  /* ... */
}
```

### 8. Version Control

- Commit `components.json` to track your configuration
- Include `src/components/ui/` in version control
- Add `node_modules/` and `.next/` to `.gitignore`

## Additional Resources

### Official Documentation
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Bun Documentation](https://bun.sh/docs)

### Community Resources
- [shadcn/ui GitHub](https://github.com/shadcn-ui/ui)
- [shadcn/ui Discord](https://discord.gg/shadcn-ui)
- [Tailwind CSS Discord](https://discord.gg/tailwindcss)

### Related Guides in This Project
- [Architecture Documentation](./architecture.md)
- [Requirements Definition](./rd.md)
- [Screen Design](./screen_design.md)

## Conclusion

This guide covers the essential aspects of installing and using shadcn/ui components with Bun in this Next.js 16 project. The component library provides a solid foundation for building accessible, customizable, and performant UI components.

For project-specific questions or issues, please refer to the main [README.md](../README.md) or open an issue in the repository.

Happy coding! 🚀
