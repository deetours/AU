export const EASE_STANDARD = [0.22, 1, 0.36, 1] as const;
export const EASE_SOFT = [0.16, 1, 0.3, 1] as const;

export const sceneReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: EASE_STANDARD,
    },
  }),
};

export const sceneFade = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: EASE_STANDARD,
    },
  }),
};

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.01,
    transition: {
      duration: 0.5,
      ease: EASE_SOFT,
    },
  },
};

export const getViewport = (reducedMotion: boolean) =>
  reducedMotion
    ? { once: true }
    : {
        once: true,
        margin: "-12% 0px -12% 0px",
      };
