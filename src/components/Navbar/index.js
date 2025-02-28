"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md relative">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">🌰</span>
                    </div>
                </div>


                <div className="hidden md:flex space-x-6 text-black font-medium">
                    <Link href="/">Home</Link>
                    <Link href="#">Customers Details</Link>
                    <Link href="#">Learning</Link>
                    <Link href="#">Kids</Link>
                    <Link href="#">Pricing</Link>
                </div>


                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/login">
                        <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-800">
                            Login
                        </button>
                    </Link>
                </div>


                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>


            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 w-full h-screen z-10 bg-white shadow-md p-6 flex flex-col space-y-4 text-black font-medium"
                    >
                        <button className="self-end" onClick={() => setMenuOpen(false)}>
                            <X size={24} />
                        </button>

                        <div className="relative w-full">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex justify-between w-full px-2 py-2 text-left font-semibold"
                            >
                                <span>Investing</span>
                                <span>▼</span>
                            </button>
                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="mt-1 bg-gray-100 rounded-md p-2 space-y-2"
                                    >
                                        <Link href="#" className="block px-2 py-1 hover:bg-gray-200">
                                            Stocks
                                        </Link>
                                        <Link href="#" className="block px-2 py-1 hover:bg-gray-200">
                                            ETFs
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="#" className="block px-2 py-2">Banking</Link>
                        <Link href="#" className="block px-2 py-2">Earning</Link>
                        <Link href="#" className="block px-2 py-2">Learning</Link>
                        <Link href="#" className="block px-2 py-2">Kids</Link>
                        <Link href="#" className="block px-2 py-2">Pricing</Link>
                        <hr className="w-full border-gray-300" />
                        <Link href="/login" className="block px-2 py-2">Log in</Link>


                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
