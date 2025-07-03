import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kushal Das - Portfolio",
  description: "This is my portfolio website -  kushal das",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-[#282e34] text-white"
      suppressHydrationWarning
    >
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}