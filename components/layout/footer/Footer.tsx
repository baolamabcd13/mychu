'use client';

import Image from 'next/image';
import { FooterNav } from './FooterNav';
import { COMPANY_INFO } from '@/constants/footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Footer = () => {
  const { name, address1, hotline, email } = COMPANY_INFO;

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ opacity: 0 }}
      className="w-full bg-[--green] text-white relative z-0 bottom-0"
      aria-label="Site footer"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 pt-16">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image 
            src="/images/logo.png"
            alt="Gaochu Logo"
            width={200}
            height={200}
            priority
            className="object-contain"
            loading="eager"
            onLoadingComplete={(img) => {
              // Có thể thêm logic khi image load xong
            }}
          />
        </div>

        <FooterNav />
        
        {/* Company Info */}
        <address className="text-center space-y-4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p>{address1}</p>
          <p>Hotline: <Link 
            href={`tel:${hotline}`}
            className="hover:text-[--yellow] transition-colors duration-200"
          >
            {hotline}
          </Link></p>
          <p>Email: <Link 
            href={`mailto:${email}`}
            className="hover:text-[--yellow] transition-colors duration-200"
          >
            {email}
          </Link></p>
        </address>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 pb-6 border-t border-white/20">
          <p>© {new Date().getFullYear()} by GAOCHU. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};