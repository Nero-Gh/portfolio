import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-transparent dark:from-primary-dark/10" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              <motion.span
                className="block mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Bismark Kadogbe
              </motion.span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary-light dark:from-primary-light dark:to-primary-dark">
                Creative Developer
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              variants={itemVariants}
            >
              Crafting beautiful and interactive web experiences
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                className="btn bg-transparent border-2 border-primary-light hover:border-primary-dark
                         dark:border-primary-dark dark:hover:border-primary-light text-gray-600 hover:text-white dark:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            className="relative mx-auto lg:mx-0"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Background Circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-light/20 to-primary-dark/20 dark:from-primary-dark/20 dark:to-primary-light/20"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Loading Placeholder */}
              {!imageLoaded && (
                <div className="absolute inset-4 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
              )}

              {/* Profile Image */}
              <motion.img
                src="/assets/bismark.jpg"
                alt="Bismark Kadogbe"
                onLoad={handleImageLoad}
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-4 rounded-full object-cover shadow-xl
                         border-4 border-white dark:border-gray-800"
              />

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary-light dark:bg-primary-dark rounded-full"
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-dark dark:bg-primary-light rounded-full"
                animate={{
                  y: [10, -10, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full mx-auto animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
