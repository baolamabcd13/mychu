'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '@/constants/menuItems';
import { Logo } from '@/components/layout/header/Logo';
import { RightActions } from '@/components/layout/header/RightActions';
import { useMenu } from '@/hooks/useMenu';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MenuItem } from '@/components/layout/header/MenuItem';
import { MenuItem as MenuItemType } from '@/types';
import { Loading } from '@/components/ui/Loading';
import { menuAnimations } from '@/constants/animations';
import { MenuButton } from '@/components/layout/header/MenuButton';
import { SocialLinks } from '@/components/layout/header/SocialLinks';
import { LeftSection } from '@/components/layout/header/LeftSection';
import { useSearchParams } from 'next/navigation';

const Header = () => {
  const searchParams = useSearchParams();
  const forceLoading = searchParams.get('loading') === 'true';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(forceLoading);
  const { 
    isOpen, 
    activeSubmenu, 
    hoveredItem, 
    toggleMenu, 
    handleSubmenuClick, 
    closeMenu, 
    setHoveredItem 
  } = useMenu();

  // Scroll handler
  const handleScroll = useCallback(() => {
    let ticking = false;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 0);
        ticking = false;
      });
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Loading handler
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasLoaded = sessionStorage.getItem('hasLoaded');
      if (hasLoaded) {
        setIsLoading(false);
      } else {
        const timer = setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('hasLoaded', 'true');
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.getElementById('main-menu');
      const menuButton = document.getElementById('menu-button');
      if (isOpen && menu && !menu.contains(e.target as Node) && 
          menuButton && !menuButton.contains(e.target as Node)) {
        closeMenu();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  if (isLoading || forceLoading) {
    return <Loading />;
  }

  return (
    <ErrorBoundary>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'h-[60px]' : 'h-[100px]'
        }`}
        role="banner"
      >
        <div className="container h-full mx-auto px-8 flex justify-between items-center">
          <LeftSection isOpen={isOpen} toggleMenu={toggleMenu} />
          <Logo isScrolled={isScrolled} />
          <RightActions />
        </div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              id="main-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
              variants={menuAnimations.menu}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 w-[580px] bg-[var(--green)] z-[9999] overflow-hidden"
            >
              <motion.div
                variants={menuAnimations.item}
                className="container px-8 py-8"
              >    
                <motion.nav role="navigation" aria-label="Main navigation">
                  {menuItems.map((item: MenuItemType, index: number) => (
                    <MenuItem
                      key={item.title}
                      item={item}
                      index={index}
                      activeSubmenu={activeSubmenu}
                      hoveredItem={hoveredItem}
                      handleSubmenuClick={handleSubmenuClick}
                      closeMenu={closeMenu}
                      setHoveredItem={setHoveredItem}
                    />
                  ))}
                </motion.nav>
                <SocialLinks />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </ErrorBoundary>
  );
};

export { Header }; 