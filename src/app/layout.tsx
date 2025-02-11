import type { Metadata, Viewport } from "next";
import { fontSans } from "@/theme/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cruise Sealing",
    template: `%s - Cruise Sealing`,
  },
  description: "Find your next cruise sealing",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
