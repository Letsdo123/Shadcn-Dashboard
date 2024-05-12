import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add any necessary meta tags, title, or other head elements here */}
      </head>
      <body className={cn(
        inter.className,
        {
          "debug-screens": process.env.NODE_ENV === "development"
        },
        "min-h-screen w-full bg-white text-black flex"
      )}>
        <Sidebar />
        <div className="p-8 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
