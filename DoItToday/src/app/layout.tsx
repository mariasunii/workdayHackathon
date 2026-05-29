import type { Metadata } from "next";

import TaskDataContextProvider from "../contexts/taskDataContextProvider";

import "./global.css";

export const metadata: Metadata = {
  title: "doitToday!",
  description: ".",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root" className="h-screen">
          <TaskDataContextProvider>{children}</TaskDataContextProvider>
        </div>
      </body>
    </html>
  );
}
