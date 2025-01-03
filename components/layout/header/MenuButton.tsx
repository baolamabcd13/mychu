import { motion } from 'framer-motion';
import { MenuIcon } from '@/components/ui/menu';

interface MenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MenuButton = ({ isOpen, toggleMenu }: MenuButtonProps) => {
  return (
    <button 
      id="menu-button"
      className="flex items-center gap-2 focus:outline-none"
      onClick={toggleMenu}
      aria-expanded={isOpen}
      aria-controls="main-menu"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <MenuIcon isOpen={isOpen} />
      <motion.div 
        className="flex flex-col items-center justify-center"
        animate={{ scale: isOpen ? 0.9 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-[var(--green)] text-[36px] font-extrabold mt-2">MENU</span>
      </motion.div>
    </button>
  );
}; 