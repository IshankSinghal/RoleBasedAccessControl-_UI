import React from "react";
import "@/styles/globals.css";
import { Sidebar } from "./sidebar.jsx";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const Layout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 overflow-y-auto">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
