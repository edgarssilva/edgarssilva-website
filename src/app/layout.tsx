import Nav from "~/components/Navbar";
import { Inter } from "next/font/google";
import "~/styles/globals.css";
import Providers from "~/components/Provider";

export const metadata = {
  title: "Edgarssilva - Blog",
  description: "Edgarssilva's blog",
};

const inter = Inter({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body className="antialiased dark:bg-neutral-900 dark:text-white">
        <Providers>
          <Nav />
          <main className="mx-auto max-w-7xl">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
