import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const skills = {
  technical: [
    // QA
    { name: "Manual Testing (Regression, Smoke, UAT, Exploratory)", level: 85 },
    { name: "API Testing (Postman, Swagger, Insomnia)", level: 80 },
    { name: "Defect Tracking (Jira, Xray)", level: 80 },
    {
      name: "Test Documentation (Test Plans, Test Cases, Test Reports)",
      level: 80,
    },
    { name: "Playwright (E2E Automation)", level: 75 },
    { name: "Jest / Jasmine (Unit Testing)", level: 75 },

    // Frontend
    { name: "Angular (Signals, RxJS, NgRx, Standalone APIs)", level: 85 },
    { name: "React (Hooks, Context, Zustand)", level: 85 },
    { name: "Next.js (App Router)", level: 75 },
    { name: "Remix", level: 70 },
    { name: "WordPress", level: 80 },
    { name: "HTML5", level: 90 },
    { name: "CSS3 / SCSS", level: 85 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "TypeScript", level: 85 },

    // Backend / APIs
    { name: "NestJS (REST APIs, Guards, Pipes, DTOs, Validation)", level: 70 },
    { name: "Supabase", level: 70 },
    { name: "RESTful API Design", level: 70 },

    // State + Data
    { name: "NgRx Store & Effects", level: 75 },
    { name: "TanStack React Query", level: 70 },
    { name: "TanStack Router", level: 70 },
    { name: "Zustand", level: 75 },
    { name: "Zod Validation", level: 70 },

    // Performance / Best Practices
    { name: "Web Performance Optimization", level: 75 },
    { name: "SEO Optimization", level: 75 },
    { name: "Accessibility (ARIA, Semantic HTML)", level: 75 },
    { name: "Modular / Clean Architecture", level: 75 },

    // UI / Design
    { name: "Figma", level: 75 },
    { name: "Photoshop", level: 65 },
    { name: "Canva", level: 70 },
    { name: "Illustrator", level: 60 },
  ],

  tools: [
    // QA + API tools
    "Postman",
    "Insomnia",
    "Swagger",

    // Tracking + Docs
    "Jira",
    "Xray",
    "Confluence",

    // Dev tools
    "Git",
    "GitHub",
    "Docker (basic)",

    // Deployment / CI
    "Netlify",
    "Vercel",
  ],
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate frontend developer and QA enthusiast, skilled in building
            responsive, high-performance, and accessible web applications. I
            combine hands-on experience in modern web technologies with
            expertise in testing and automation to deliver reliable,
            user-friendly, and maintainable solutions.
          </p>

          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/docs/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-dark hover:bg-primary-light dark:bg-primary-dark dark:hover:bg-primary-light transition-colors duration-200 "
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.technical.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <motion.div
                    className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-light to-primary-dark rounded-full"
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-700 dark:text-gray-300">
                    {tool}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
