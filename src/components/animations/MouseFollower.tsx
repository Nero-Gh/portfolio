import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    setIsVisible(true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="hidden md:block fixed pointer-events-none z-50"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <div className="relative">
        <div className="absolute w-8 h-8 border-2 border-primary-light dark:border-primary-dark rounded-full" />
        <div className="absolute w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
      </div>
    </motion.div>
  );
};

export default MouseFollower;
