'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
}

export default function SlideUp({
  children,
  delay = 0,
  duration = 0.8,
  className,
  distance = 40,
  once = true,
}: SlideUpProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
