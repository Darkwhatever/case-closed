"use client";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { leftPanelVariants } from "./(motion)/LeftPanelVariants";

const LeftPanel = () => {
  const variants: Variants = leftPanelVariants();

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex shrink-0 absolute left-0 top-0 bottom-0 bg-[#020710] h-screen w-[236px] z-50 shadow-lg"
    ></motion.div>
  );
};

export default LeftPanel;
