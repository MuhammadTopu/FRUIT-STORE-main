export const FadeUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      delay,
    },
  },
});

export const FadeLeft = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "tween",
      ease: [0.25, 0.1, 0.25, 1], // custom cubic-bezier (same as CSS ease)
      duration: 0.9,
      delay,
    },
  },
});

export const FadeRight = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "tween",
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.9,
      delay,
    },
  },
});
