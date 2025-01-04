"use client";

import Image from "next/image";
import { FooterNav } from "./FooterNav";
import { COMPANY_INFO } from "@/constants/footer";
import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  const { name, address1, hotline, email } = COMPANY_INFO;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[--green] text-white"
      aria-label="Site footer"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 py-16 min-h-[730px] flex flex-col justify-between">
        {/* Logo */}
        <div>
          <div className="flex justify-center mb-10">
            <Image
              src="/images/logo.png"
              alt="Gaochu Logo"
              width={200}
              height={200}
              priority
              className="object-contain"
              loading="eager"
              unoptimized
            />
          </div>

          <FooterNav />

          {/* Company Info */}
          <address className="text-center space-y-4">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>{address1}</p>
            <p>
              Hotline:{" "}
              <Link
                href={`tel:${hotline}`}
                className="hover:text-[--yellow] transition-colors duration-200"
              >
                {hotline}
              </Link>
            </p>
            <p>
              Email:{" "}
              <Link
                href={`mailto:${email}`}
                className="hover:text-[--yellow] transition-colors duration-200"
              >
                {email}
              </Link>
            </p>
          </address>

          {/* E-check Image */}
          <div className="flex justify-center my-8">
            <Link
              href="https://echeck.numbala.com/hop-tac-xa-san-xuat-my-chu-bao-loc-dn1249.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://echeck.numbala.com/imgs/echeck1.svg"
                alt="E-check Verification"
                width={300}
                height={250}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-white/20">
          <p>© {new Date().getFullYear()} by GAOCHU. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};
