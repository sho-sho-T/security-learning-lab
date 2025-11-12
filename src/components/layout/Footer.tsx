export function Footer() {
  return (
    <footer className="border-t bg-muted/50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Webセキュリティ学習ラボ</p>
          <p>
            <a
              href="https://github.com/sho-sho-T/security-learning-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline transition-colors"
            >
              GitHub Repository
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
