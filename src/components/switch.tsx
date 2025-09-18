import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SwitchProps {
  activeButton: React.ReactNode;
  hiddenButton: React.ReactNode;
  setActiveButton: () => void;
}

export default function Switch({
  activeButton,
  hiddenButton,
  setActiveButton,
}: SwitchProps) {
  const [isHovered, setisHovered] = useState(false);

  const switchVariants = {
    visible: { scale: 1, opacity: 1, y: -50 }, 
    hover: { scale: 1.4 },
    hidden: { scale: 0.5, opacity: 0, y: -40 },
  };

  return (
    <div className="fixed bottom-5 left-5">
      <div className="relative flex items-center justify-center w-[3rem] h-[3rem]">
        <AnimatePresence>
          {isHovered && (
            <motion.button
              key="hiddenButton"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={switchVariants}
              transition={{ duration: 0.3 }}
              className="absolute flex items-center justify-center w-[2rem] h-[2rem] bg-gray-800 text-white rounded-full shadow-lg"
            >
              <p className="text-sm font-semibold">{hiddenButton}</p>
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          className="flex items-center justify-center w-[3rem] h-[3rem] bg-white text-gray-800 rounded-full shadow-lg drop-shadow-lg backdrop-blur-[0.5rem] transition-all duration-300 ease-in-out hover:bg-gray-300 dark:bg-gray-800 dark:text-white cursor-pointer"
          variants={switchVariants}
          initial={{ scale: 1, opacity: 1 }} 
          whileHover="hover"
          onMouseEnter={() => setisHovered(true)}
          onMouseLeave={() => setisHovered(false)}
          onClick={setActiveButton}
        >
          <span className="font-semibold text-lg">{activeButton}</span>
        </motion.button>
      </div>
    </div>
  );
}
