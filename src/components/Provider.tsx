//pritter-ignore
"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableColorScheme={true}
      enableSystem={true}
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
}
