import { TheorySection } from "@/components/xss/TheorySection";

/**
 * Example usage of TheorySection component
 * This file demonstrates how to use the TheorySection component
 * in the XSS learning page.
 */

export function TheorySectionExample() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Basic usage with title and simple content */}
      <TheorySection title="What is XSS?" id="what-is-xss">
        <p>
          Cross-Site Scripting (XSS) is a security vulnerability that allows
          attackers to inject malicious scripts into web pages viewed by other
          users.
        </p>
      </TheorySection>

      {/* Usage with code snippets */}
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

      {/* Usage with lists */}
      <TheorySection title="Types of XSS" id="xss-types">
        <p>There are three main types of XSS attacks:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Reflected XSS</strong>: The malicious script is reflected
            off the web server
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

      {/* Usage with table */}
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
            <tr>
              <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
                Output Encoding
              </td>
              <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
                Encode data before rendering to the page
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
                Content Security Policy
              </td>
              <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
                Use CSP headers to prevent script execution
              </td>
            </tr>
          </tbody>
        </table>
      </TheorySection>
    </div>
  );
}
