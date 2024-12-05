import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useActiveSection } from "../../hooks/useActiveSection";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary-dark dark:text-primary-light"
          >
            Portfolio
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-primary-dark dark:text-primary-light font-medium"
                    : "text-text-light dark:text-text-dark hover:text-primary-dark dark:hover:text-primary-light"
                }`}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <SunIcon className="w-6 h-6 text-yellow-500" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-700" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
