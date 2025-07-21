import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Bilal Blog",
  description: "a small blog using NextJs ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
