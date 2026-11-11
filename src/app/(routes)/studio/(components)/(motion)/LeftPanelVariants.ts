import type { Variants } from "framer-motion";

export const leftPanelVariants = (): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: -236,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: {
          duration: 0.3,
          ease: "easeInOut",
        },
        x: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },

    exit: {
      opacity: 0,
      x: -236,
      transition: {
        opacity: {
          duration: 0.3,
          ease: "easeInOut",
        },
        x: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
  };
};
