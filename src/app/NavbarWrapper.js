"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/sidebar";

const navbarRoutes = ["/login", "/", "/forgot-password"];

export default function NavbarWrapper({ children }) {
  const pathname = usePathname();
  const [isNavbarPage, setIsNavbarPage] = useState(false);

  useEffect(() => {
    setIsNavbarPage(navbarRoutes.includes(pathname));
  }, [pathname]);

  if (isNavbarPage === undefined) return null; // Avoid hydration mismatch

  return isNavbarPage ? (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  ) : (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">{children}</div>
    </div>
  );
}
