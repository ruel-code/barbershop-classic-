import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Barbershop Classic | Bukan cuma cukur, ini gaya",
  description:
    "Barbershop khusus pria dengan harga terjangkau. Cukur rambut, shave, kids, dan paket komplit. Buka Senin-Sabtu 09-21, Minggu 10-18.",
  openGraph: {
    title: "Barbershop Classic",
    description: "Bukan cuma cukur, ini gaya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(oswald.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
