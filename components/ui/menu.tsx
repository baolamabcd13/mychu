'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import React from 'react';
const lineVariants: Variants = {
  closed: {
    rotate: 0,
    y: 0,
    opacity: 1,
  },
  opened: (custom: number) => ({
    rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
    y: custom === 1 ? 6 : custom === 3 ? -6 : 0,
    opacity: custom === 2 ? 0 : 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  }),
};

interface MenuIconProps {
  isOpen: boolean;
  onClick?: () => void;
}

const MenuIcon = ({ isOpen, onClick }: MenuIconProps) => {
  const controls = useAnimation();

  // Animate based on isOpen prop
  React.useEffect(() => {
    controls.start(isOpen ? 'opened' : 'closed');
  }, [isOpen, controls]);

  return (
    <div
      className="cursor-pointer select-none p-2 rounded-md transition-colors duration-200 flex items-center justify-center"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="var(--green)"
      >
        <motion.line
          x1="4"
          y1="6"
          x2="20"
          y2="6"
          variants={lineVariants}
          animate={controls}
          custom={1}
        />
        <motion.line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          variants={lineVariants}
          animate={controls}
          custom={2}
        />
        <motion.line
          x1="4"
          y1="18"
          x2="20"
          y2="18"
          variants={lineVariants}
          animate={controls}
          custom={3}
        />
      </svg>
    </div>
  );
};

export { MenuIcon };
