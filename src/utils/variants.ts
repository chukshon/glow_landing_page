import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

export const accordionDropDown: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
}

export const fadeLeft: Variants = {
  initial: {
    x: 50,
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

export const zoomIn: Variants = {
  initial: {
    scale: 0,
  },
  whileInView: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
}

export const staggerContainer: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}
