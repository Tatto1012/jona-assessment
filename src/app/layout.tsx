import type { Metadata, Viewport } from "next";
import { fontSans } from "@/theme/fonts";
import { Sidenav } from "@/components";
import "./globals.css";
import { getCruiseLineList } from "@/helpers";
import { fetchSailings } from "@/services/api";

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
  const sailings = await fetchSailings();

  const cruiselist = getCruiseLineList(sailings);

  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased`}>
        <div className="flex flex-col lg:flex-row h-screen">
          <Sidenav cruiselist={cruiselist} />
          <div className="flex-1 bg-primary-100 pl-5 pr-12 pt-10 pb-10 text-primary-300 overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
