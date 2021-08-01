export const fade = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
  },
};

export const fadeSmallDelay = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1], delay: 0.55 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1], delay: 1 },
  },
};

export const revealInOut = {
  initial: { y: '150%', opacity: 0, rotate: '45deg' },
  enter: {
    y: '0%',
    opacity: 1,
    rotate: '0deg',
    originX: 0,
    originY: 0.5,
    transition: {
      duration: 1.5,
      ease: [0.77, 0, 0.175, 1],
      staggerChildren: 0.03,
    },
  },
  exit: {
    y: '150%',
    transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] },
  },
};

export const revealInOutRotate = {
  initial: {
    y: '110%',
    opacity: 0,
    rotate: '15deg',
  },
  enter: {
    y: '0%',
    opacity: 1,
    rotate: '0deg',
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
  },
  exit: {
    y: '110%',
    rotate: '15deg',
    transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
  },
};

export const revealInOutReserve = {
  initial: { y: '-110%', opacity: 0 },
  enter: {
    y: '0%',
    opacity: 1.2,
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
  },
  exit: {
    y: '-110%',
    transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
  },
};

export const revealInOutSlow = {
  initial: { y: '130%' },
  enter: {
    y: '0%',
    transition: {
      duration: 1,
      ease: [0.165, 0.84, 0.44, 1],
      delay: 0.45,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.165, 0.84, 0.44, 1] },
  },
};

export const navInOut = {
  initial: { opacity: 0, y: '100%' },
  enter: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.85, ease: [0.215, 0.61, 0.355, 1] },
  },
  exit: {
    opacity: 0,
    y: '100%',
    transition: { duration: 0.84, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export const menuInOut = {
  initial: { y: '105%', opacity: 0 },
  enter: {
    y: '0%',
    opacity: 1,
    transition: { duration: 1.1, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    y: '105%',
    opacity: 0,
    transition: { duration: 0.45, ease: [0.83, 0, 0.17, 1] },
  },
};

export const revealIn = {
  initial: { y: '100%' },
  enter: {
    y: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    y: '100%',
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
  },
};
