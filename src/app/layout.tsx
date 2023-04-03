import { Inter } from "next/font/google";
import "~/styles/globals.css";
import Providers from "~/components/Provider";

export const metadata = {
  title: "Edgarssilva - Blog",
  description: "Edgarssilva's blog",
};

const inter = Inter({
  // weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

import Nav from "~/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body className="mx-auto max-w-7xl px-6 antialiased dark:bg-neutral-900 dark:text-white ">
        <Providers>
          <Nav />
          {children}
        </Providers>
        <script> </script>
      </body>
    </html>
  );
}
