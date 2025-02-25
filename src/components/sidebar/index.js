'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Home, Settings, LogOut, Menu, Users, Briefcase, BarChart, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when an item is clicked (for mobile)
  const closeSidebar = () => {
    if (isMobile) setIsOpen(false);
  };

  return (
    <>
      {/* Sidebar Navigation */}
      <motion.nav
        animate={{ width: isOpen ? 250 : 80 }}
        className="fixed z-10 left-0 top-0 bottom-0 bg-green-400 text-white flex flex-col p-5 shadow-md transition-all duration-500"
      >
        {/* Hamburger Button (only visible on mobile) */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden absolute top-4 right-4 bg-green-500 text-white p-2 rounded-md"
        >
          <Menu size={24} />
        </button>

        {/* App Name */}
        <div className="mb-6 text-xl font-bold text-center">{isOpen ? 'My App' : 'M'}</div>

        {/* Sidebar Items */}
        <ul className="flex flex-col gap-6 flex-1">
          {[ 
            { icon: Home, label: 'Dashboard' },
            { icon: Settings, label: 'Settings' },
            { icon: Users, label: 'Customers' },
            { icon: Briefcase, label: 'Collections' },
            { icon: Megaphone, label: 'Marketing' },
            { icon: BarChart, label: 'Reports' },
            { icon: LogOut, label: 'Logout', action: () => router.push('/') },
          ].map(({ icon: Icon, label, action }, index) => (
            <li
              key={index}
              onClick={() => {
                if (action) {
                  action(); // Execute custom action if defined
                }
                if (!isOpen) setIsOpen(true); // Open sidebar when clicking an icon in mobile view
                else closeSidebar(); // Close when clicking a full item
              }}
              className="flex items-center gap-3 cursor-pointer p-2 hover:bg-green-600 rounded-lg"
            >
              <Icon size={24} />
              {isOpen && <span>{label}</span>}
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};

export default Sidebar;
