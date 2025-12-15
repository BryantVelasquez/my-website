import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Made by Bryant Velasquez",
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
