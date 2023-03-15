import Nav from "~/components/Navbar";
import { Roboto } from "next/font/google";
import "~/styles/globals.css";

export const metadata = {
  title: "Edgarssilva - Blog",
  description: "Edgarssilva's blog",
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.className} `}>
      <body>
        <Nav />
        <main className="mx-auto max-w-7xl">{children}</main>
      </body>
    </html>
  );
}
