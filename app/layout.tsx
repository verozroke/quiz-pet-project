import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Quizzes",
  description: "Quiz website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <main className="px-5 py-8 bg-slate-100 min-h-screen">
          <h1 className="font-bold text-6xl tracking-wide my-3">Викторины</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
