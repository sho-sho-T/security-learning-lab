# TheorySection Component

A reusable, accessible component for displaying educational content sections in the XSS learning page.

## Features

- ✅ **Semantic HTML**: Uses `<section>` and `<h2>` tags for proper document structure
- ✅ **Accessible**: Includes proper ARIA attributes (aria-labelledby) for screen readers
- ✅ **Responsive Design**: Built with Tailwind CSS for mobile-first responsive layouts
- ✅ **Rich Content Support**: Handles text, code snippets, lists, and tables
- ✅ **Styled with shadcn/ui**: Uses Card components for consistent styling
- ✅ **Typography**: Includes prose classes for readable content
- ✅ **Dark Mode**: Supports light and dark themes
- ✅ **TypeScript**: Fully typed with comprehensive prop definitions

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Section title displayed in h2 tag |
| `children` | `React.ReactNode` | Yes | Section content (text, code, lists, tables) |
| `id` | `string` | No | Optional anchor link id for deep linking |
| `className` | `string` | No | Optional additional CSS classes |

## Usage

### Basic Example

```tsx
import { TheorySection } from "@/components/xss";

function MyPage() {
  return (
    <TheorySection title="What is XSS?" id="what-is-xss">
      <p>
        Cross-Site Scripting (XSS) is a security vulnerability that allows
        attackers to inject malicious scripts into web pages viewed by other users.
      </p>
    </TheorySection>
  );
}
```

### With Code Snippets

```tsx
<TheorySection title="XSS Attack Example" id="xss-example">
  <p>Here's a simple example of an XSS attack:</p>
  <pre className="bg-zinc-900 text-zinc-50 p-4 rounded-lg overflow-x-auto">
    <code>{'<script>alert("XSS Attack!")</script>'}</code>
  </pre>
  <p className="mt-4">
    This script, when injected into a vulnerable page, will execute in the
    victim's browser.
  </p>
</TheorySection>
```

### With Lists

```tsx
<TheorySection title="Types of XSS" id="xss-types">
  <p>There are three main types of XSS attacks:</p>
  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Reflected XSS</strong>: The malicious script is reflected off
      the web server
    </li>
    <li>
      <strong>Stored XSS</strong>: The malicious script is permanently
      stored on the target server
    </li>
    <li>
      <strong>DOM-based XSS</strong>: The vulnerability exists in
      client-side code
    </li>
  </ul>
</TheorySection>
```

### With Tables

```tsx
<TheorySection title="XSS Prevention Methods" id="xss-prevention">
  <table className="min-w-full border-collapse border border-zinc-300 dark:border-zinc-700">
    <thead>
      <tr className="bg-zinc-100 dark:bg-zinc-800">
        <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
          Method
        </th>
        <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
          Input Validation
        </td>
        <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
          Validate and sanitize all user input
        </td>
      </tr>
    </tbody>
  </table>
</TheorySection>
```

### Custom Styling

```tsx
<TheorySection 
  title="Advanced Topic" 
  id="advanced"
  className="mb-12 border-2 border-primary"
>
  <p>Custom styled section with additional spacing and border.</p>
</TheorySection>
```

## Accessibility

The component follows accessibility best practices:

1. **Semantic HTML**: Uses proper `<section>` and heading tags
2. **ARIA Labels**: Links section to its heading using `aria-labelledby`
3. **Keyboard Navigation**: All interactive elements are keyboard accessible
4. **Screen Reader Friendly**: Proper document structure and ARIA attributes

## Styling

The component uses:

- **Tailwind CSS** for utility-first styling
- **shadcn/ui Card** components for consistent design
- **Prose classes** for typography (prose-stone, dark:prose-invert)
- **Responsive spacing** with mb-8 (margin-bottom: 2rem)
- **Dark mode support** with dark: variants

## Implementation Details

- Built with React Server Components (RSC) in mind
- TypeScript for type safety
- Passes Biome linting with no errors
- No runtime dependencies beyond React and existing UI components
- Fully compatible with Next.js 16 App Router

## File Structure

```
src/components/xss/
├── TheorySection.tsx       # Main component
├── TheorySectionExample.tsx # Usage examples
└── index.ts                # Exports
```

## License

Part of the Security Learning Lab project.
