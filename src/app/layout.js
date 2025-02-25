'use client';

import { usePathname } from 'next/navigation';
import SidebarLayout from '@/components/sidebar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




const navbarRoutes = ['/login', '/', '/forgot-password'];

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isNavbarPage = navbarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased  flex flex-col min-h-screen`}>
        
        
        {isNavbarPage ? (
          <>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </>
        ) : (
          <div className="flex flex-row">
            <SidebarLayout />
            <main className="flex-grow ml-[80px] md:ml-[250px] transition-all duration-500">
              {children}
            </main>
          </div>
        )}

        <Toaster position="top-center" containerStyle={{ top: "100px" }} />
        
      </body>
    </html>
  );
}
