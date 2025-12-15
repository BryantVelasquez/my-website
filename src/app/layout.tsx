import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Made by Bryant Velasquez",
  icons: {
    icon: "/beer.png",
    shortcut: "/beer.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
