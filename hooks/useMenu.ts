import { useState, useCallback } from 'react';

export const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleSubmenuClick = useCallback((title: string) => {
    setActiveSubmenu(prev => prev === title ? null : title);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, []);

  return {
    isOpen,
    activeSubmenu,
    hoveredItem,
    toggleMenu,
    handleSubmenuClick,
    closeMenu,
    setHoveredItem
  };
}; 