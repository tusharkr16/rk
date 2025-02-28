'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Target, UserPlus, Upload, ChevronDown, LogOut, LogOutIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

export default function Sidebar() {
  const [active, setActive] = useState('Home');
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const { logoutAdmin } = useAuth();

  const menuItems = [
    { name: 'Customer-List', href: '/dashboard', icon: <Target size={20} /> },
    {
      name: 'Uploads',
      icon: <Upload size={20} />,
      submenu: [
        { name: 'Upload Monthly Lead', href: '/upload-customers' },
        { name: 'Upload Paid Lead', href: '/upload-paid-lead' },
      ],
    },
    { name: 'Create User', href: '/user', icon: <UserPlus size={20} /> },
  ];

  return (
    <div className="min-h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav className="flex flex-col space-y-2 flex-grow">
        {menuItems.map((item) =>
          item.submenu ? (
            <div key={item.name}>
              <button
                className="flex items-center justify-between w-full p-3 rounded-lg transition duration-200 hover:bg-gray-700"
                onClick={() => setIsUploadOpen(!isUploadOpen)}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </div>
                <motion.div
                  animate={{ rotate: isUploadOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={isUploadOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="ml-6 flex flex-col space-y-1">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className={`flex items-center p-2 rounded-lg transition duration-200 hover:bg-gray-700 ${active === sub.name ? 'bg-gray-700' : ''
                        }`}
                      onClick={() => setActive(sub.name)}
                    >
                      <span>{sub.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center p-3 rounded-lg transition duration-200 hover:bg-gray-700 ${active === item.name ? 'bg-gray-700' : ''
                }`}
              onClick={() => setActive(item.name)}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Link>
          )
        )}
      </nav>

      <div className="mt-auto">
        <button
          className="flex items-center p-3 rounded-lg transition duration-200 hover:bg-gray-700 w-full"
          onClick={() => logoutAdmin()}
        >
          <LogOutIcon size={20} />
          <span className="ml-3">Log Out</span>
        </button>
      </div>

    </div>
  );
}
