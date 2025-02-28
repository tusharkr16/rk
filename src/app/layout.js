import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "./NavbarWrapper";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <NavbarWrapper>{children}</NavbarWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
