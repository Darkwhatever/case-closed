export const useHeaderVariants = (isStudioRoute: boolean) => {
  return {
    initial: {
      opacity: 0,
      backgroundColor: "transparent",
      borderBottom: "none",
    },

    entering: {
      opacity: 1,
      backgroundColor: isStudioRoute ? "#020710" : "transparent",
      borderBottom: isStudioRoute ? "1px solid #1b2839" : "none",

      transition: {
        opacity: {
          duration: 0.5,
          ease: "easeInOut",
        },
        backgroundColor: {
          duration: 0.5,
          ease: "easeInOut",
        },
        borderBottom: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
    resting: {
      opacity: 1,
      backgroundColor: isStudioRoute ? "#020710" : "transparent",
      borderBottom: isStudioRoute ? "1px solid #1b2839" : "none",

      transition: {
        backgroundColor: {
          duration: 0.5,
          ease: "easeInOut",
        },
        borderBottom: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  };
};
