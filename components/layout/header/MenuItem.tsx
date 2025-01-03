import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MenuItem as MenuItemType } from '@/types';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
  activeSubmenu: string | null;
  hoveredItem: string | null;
  handleSubmenuClick: (title: string) => void;
  closeMenu: () => void;
  setHoveredItem: (title: string | null) => void;
}

export const MenuItem = ({
  item,
  index,
  activeSubmenu,
  hoveredItem,
  handleSubmenuClick,
  closeMenu,
  setHoveredItem
}: MenuItemProps) => {
  const isActive = hoveredItem === item.title || activeSubmenu === item.title;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1 }}
      role="menuitem"
      onMouseEnter={() => setHoveredItem(item.title)}
      onMouseLeave={() => setHoveredItem(null)}
      className="py-3"
    >
      <div className="relative">
        {item.submenu ? (
          <motion.div 
            className="flex justify-between items-center cursor-pointer group"
            whileHover={{ x: 20 }}
            onClick={() => handleSubmenuClick(item.title)}
          >
            <span className={`text-white text-[32px] font-extrabold transition-colors duration-200 ${
              isActive ? 'text-[var(--yellow)]' : 'group-hover:text-[var(--yellow)]'
            }`}>
              {item.title}
            </span>
            <span className={`text-white text-[32px] transition-colors duration-200 ${
              isActive ? 'text-[var(--yellow)]' : 'group-hover:text-[var(--yellow)]'
            }`}>
              {'>'}
            </span>
          </motion.div>
        ) : (
          <Link href={item.href} onClick={closeMenu}>
            <motion.div 
              className="flex justify-between items-center cursor-pointer group"
              whileHover={{ x: 20 }}
            >
              <span className={`text-white text-[32px] font-extrabold transition-colors duration-200 ${
                isActive ? 'text-[var(--yellow)]' : 'group-hover:text-[var(--yellow)]'
              }`}>
                {item.title}
              </span>
            </motion.div>
          </Link>
        )}

        {/* Submenu */}
        <AnimatePresence>
          {item.submenu && activeSubmenu === item.title && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden pl-8 mt-4 space-y-3"
            >
              {item.submenu.map((subItem, subIndex) => (
                <motion.div
                  key={subIndex}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: 0.1 * subIndex }}
                >
                  <Link 
                    href={subItem.href}
                    className={`text-white text-3xl font-bold block py-1 transition-colors duration-200 hover:text-[var(--yellow)]`}
                    onClick={() => {
                      closeMenu();
                      handleSubmenuClick(item.title);
                    }}
                    onMouseEnter={() => setHoveredItem(item.title)}
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
  );
}; 