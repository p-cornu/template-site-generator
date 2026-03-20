import type { ReactNode } from 'react';

// Root layout — only wraps children, no html/body here.
// html + body live in [locale]/layout.tsx.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
