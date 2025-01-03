import { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  isScrolled: boolean;
}

export const Logo = memo(({ isScrolled }: LogoProps) => {
  return (
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
  );
});

Logo.displayName = 'Logo'; 