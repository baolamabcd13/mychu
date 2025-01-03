'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { MenuIcon } from '@/components/ui/menu';
import Image from 'next/image';
import { SearchIcon } from '@/components/ui/search';
import { MapPinIcon } from '@/components/ui/map-pin';
import { MenuItem } from '@/types';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    { title: "TRANG CHỦ", href: "/" },
    { 
      title: "VỀ VIFON", 
      href: "/about",
      submenu: [
        { title: "Giới thiệu", href: "/about/intro" },
        { title: "Lịch sử", href: "/about/history" },
        { title: "Thành tựu", href: "/about/achievements" },
        { title: "Cộng đồng", href: "/about/community" }
      ]
    },
    { 
      title: "SẢN PHẨM", 
      href: "/products",
      submenu: [
        { title: "Mì Trong Nước", href: "/products/domestic-noodles" },
        { title: "Mì Xuất Khẩu", href: "/products/export-noodles" }
      ]
    },
    { title: "CỬA HÀNG VIFONMART", href: "/vifonmart" },
    { 
      title: "TRUYỀN THÔNG & KHUYẾN MÃI", 
      href: "/news-promotions",
      submenu: [
        { title: "Tin tức & Sự kiện", href: "/news-promotions/news" },
        { title: "Khuyến mãi", href: "/news-promotions/promotions" }
      ]
    },
    { title: "BẾP VIFON", href: "/vifon-kitchen" },
    { title: "THƯ VIỆN VIFON", href: "/vifon-library" },
    { title: "NGHỀ NGHIỆP", href: "/careers" },
    { title: "AN TOÀN THỰC PHẨM", href: "/food-safety" },
    { title: "LIÊN HỆ", href: "/contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
      isScrolled ? 'h-[60px]' : 'h-[100px]'
    }`}>
      <div className="container h-full mx-auto px-4 flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center gap-4 fixed left-0 pl-4">
          <button 
            className="flex items-center gap-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon isOpen={isOpen} />
            <div className="flex flex-col items-center justify-center">
              <span className="text-[var(--green)] text-[36px] font-extrabold mt-2">MENU</span>
            </div>
          </button>
        </div>

        {/* Center logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ 
              width: isScrolled ? 60 : 100,
              height: isScrolled ? 60 : 100
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </Link>

        {/* Right section */}
        <div className="flex items-center gap-4 fixed right-0 pr-4">
          <button>
            <SearchIcon />   
          </button>
          <button>
            <MapPinIcon />
          </button>
          <button className="flex items-center justify-center w-[50px] h-[50px]">
            <Image 
              src="/images/vietnam.png" 
              alt="GB Flag" 
              width={50} 
              height={50}
              className="object-contain"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "100vh", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
            className="absolute top-full left-0 w-[580px] bg-[var(--green)] z-[9999] overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="container px-4 py-6"
            >    
              <nav className="flex flex-col space-y-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.2 + index * 0.1,
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <div className="relative">
                      {/* Main menu item */}
                      {item.submenu ? (
                        <motion.div 
                          className="flex justify-between items-center cursor-pointer group"
                          whileHover={{ 
                            x: 20,
                            transition: { duration: 0.2 }
                          }}
                          onClick={() => {
                            setActiveSubmenu(activeSubmenu === item.title ? null : item.title);
                          }}
                        >
                          <span className={`text-white text-[32px] font-extrabold transition-colors duration-200 group-hover:text-[var(--yellow)] ${
                            hoveredItem === item.title ? 'text-[var(--yellow)]' : ''
                          }`}>
                            {item.title}
                          </span>
                          <motion.span 
                            className={`text-4xl transition-colors duration-200 group-hover:text-[var(--yellow)] ${
                              hoveredItem === item.title ? 'text-[var(--yellow)]' : 'text-white'
                            }`}
                            animate={{ 
                              rotate: activeSubmenu === item.title ? 90 : 0 
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            ›
                          </motion.span>
                        </motion.div>
                      ) : (
                        <Link href={item.href}>
                          <motion.div 
                            className="flex justify-between items-center cursor-pointer"
                            whileHover={{ 
                              x: 20,
                              transition: { duration: 0.2 }
                            }}
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="text-white text-[32px] font-extrabold hover:text-[var(--yellow)] transition-colors duration-200">
                              {item.title}
                            </span>
                          </motion.div>
                        </Link>
                      )}
                      
                      {/* Submenu với AnimatePresence */}
                      <AnimatePresence>
                        {item.submenu && activeSubmenu === item.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden pl-8 mt-4"
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -20, opacity: 0 }}
                                transition={{ 
                                  delay: 0.1 * subIndex,
                                  duration: 0.3
                                }}
                              >
                                <Link 
                                  href={subItem.href}
                                  className="text-white text-3xl font-bold block py-2 hover:text-[var(--yellow)] transition-colors duration-200"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveSubmenu(null);
                                  }}
                                  onMouseEnter={() => setHoveredItem(item.title)}
                                  onMouseLeave={() => setHoveredItem(null)}
                                >
                                  {subItem.title}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.2 + menuItems.length * 0.05,
                  duration: 0.2
                }}
                className="flex gap-8 mt-8 justify-center"
              >
                  <Link href="https://facebook.com">
                    <Image src="/images/facebook.png" alt="Facebook" width={60} height={60}  />
                  </Link>
                  <Link href="https://youtube.com">
                    <Image src="/images/youtube.png" alt="Youtube" width={60} height={60}  />
                  </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export { Header }; 