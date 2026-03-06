import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingNavbar } from "@/components/FloatingNavbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shanti Catering Surabaya – Catering Premium & Nasi Kotak Terbaik",
  description:
    "Shanti Catering Surabaya menyediakan layanan catering premium, nasi kotak, bento, dan prasmanan untuk pernikahan, kantor, dan event. Rasa bintang 5, harga kompetitif.",
  keywords: [
    "catering surabaya",
    "catering pernikahan surabaya",
    "nasi kotak surabaya",
    "bento box surabaya",
    "catering kantor surabaya",
    "shanti catering",
    "catering terbaik surabaya"
  ],
  openGraph: {
    title: "Shanti Catering Surabaya – Solusi Catering Premium Anda",
    description: "Nikmati sajian katering kualitas bintang 5 untuk momen spesial Anda di Surabaya. Pesan sekarang!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={montserrat.variable}>
      <body className="font-sans min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <FloatingNavbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
