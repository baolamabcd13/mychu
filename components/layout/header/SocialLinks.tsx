import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const SocialLinks = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="flex gap-8 mt-12 justify-center"
    >
      <motion.div
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/images/facebook.png" 
            alt="Follow us on Facebook" 
            width={60} 
            height={60} 
            priority={false}
            className="drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
          />
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ 
          scale: 1.1,
          rotate: [0, 10, -10, 10, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/images/youtube.png" 
            alt="Subscribe to our Youtube channel" 
            width={60} 
            height={60} 
            priority={false}
            className="drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};