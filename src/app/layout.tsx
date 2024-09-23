import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Jarrett Huang's Web Labs",
  description: "Web projects and code experiments created by Jarrett Huang.",
};

const font = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
