import type { Metadata } from "next";
import { Space_Grotesk, Poppins, Inter, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "The Pop Social | The All-in-One Platform for Creators",
  description: "Simplify digital growth with premium creative-tech strategy, social media management, branding, web and app development, and high-converting modern experiences.",
  keywords: [
    "The Pop Social",
    "Digital growth agency",
    "Creator economy",
    "Social media management",
    "Branding",
    "Web development",
    "App development",
    "Paid ads",
    "Content strategy",
    "Gen Z agency"
  ],
  authors: [{ name: "The Pop Social Team" }],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${poppins.variable} ${inter.variable} ${syne.variable} scroll-smooth`}
    >
      <body className="bg-[#0b1322] text-[#F9F9FA] antialiased selection:bg-[#F76A95] selection:text-white overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
