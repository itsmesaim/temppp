'use client';

import React from 'react';
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from 'framer-motion';

const EASE = [0.23, 1, 0.32, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.02 },
  },
};

/** Mobile-safe: no negative margin, triggers on first pixel visible */
function viewportConfig(once = true) {
  return {
    once,
    amount: 0.05 as const,
    margin: '0px 0px 0px 0px' as const,
  };
}

function transition(duration = 0.65, delay = 0) {
  return { duration, delay, ease: EASE };
}

interface RevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  variant?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideRight' | 'slideLeft';
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  variant = 'fadeUp',
  once = true,
  className,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();
  const variants = { fadeUp, fadeIn, scaleIn, slideRight, slideLeft }[variant];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig(once)}
      variants={variants}
      transition={transition(duration, delay)}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: React.ReactNode;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  fast?: boolean;
}

export function Stagger({
  children,
  stagger = 0.1,
  delayChildren = 0.05,
  once = true,
  fast = false,
  className,
  ...props
}: StaggerProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig(once)}
      variants={
        fast
          ? staggerFast
          : {
              hidden: {},
              visible: { transition: { staggerChildren: stagger, delayChildren } },
            }
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = 'fadeUp',
  once = true,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();
  const variants = { fadeUp, fadeIn, scaleIn, slideRight, slideLeft }[variant];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  // Each item also watches its own viewport — fixes mobile when parent Stagger misses IO
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig(once)}
      variants={variants}
      transition={transition(0.55)}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface HoverLiftProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: React.ReactNode;
  lift?: number;
  scale?: number;
}

export function HoverLift({
  children,
  lift = -6,
  scale = 1.02,
  className,
  ...props
}: HoverLiftProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ y: lift, scale }}
      whileTap={{ scale: 0.98, y: lift / 2 }}
      transition={{ type: 'spring', stiffness: 380, damping: 22 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function HeroReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({
  children,
  className,
  variant = 'fadeUp',
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealProps['variant'];
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const variants = { fadeUp, fadeIn, scaleIn, slideRight, slideLeft }[variant];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={variants}
      transition={transition(0.75, delay ?? 0)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatPulse({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GlowButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 420, damping: 18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { motion };