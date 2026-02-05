import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const projects = [
  {
    title: "Database Canvas Schema",
    description:
      "An interactive platform for creating and managing database schemas. Users can design tables, define relationships, and visualize their database structure in a drag-and-drop canvas, making database planning intuitive and collaborative",
    tags: ["React", "TypeScript", "Tailwind", "Email Js", "Framer motion"],
    category: "enterprise",
    image:
      "https://res.cloudinary.com/hevo/images/c_scale,w_448,h_253,dpr_2.625/f_webp,q_auto:best/v1685872818/hevo-learn-1/quickdbd-ui/quickdbd-ui.png?_i=AA",
    githubLink: "https://schemacanvas.netlify.app",
  },
  {
    title: "Supply Chain Traceability System",
    description:
      "Spearheaded frontend architecture using Angular to support features like role-based access control and dynamic user dashboards.",
    tags: ["Angular", "TypeScript", "SCSS", "REST API", "Vis Js", "NGRX"],
    category: "enterprise",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    githubLink: "https://scts.netlify.app",
  },
  {
    title: "Personal Blog Platform",
    description:
      "A modern blog platform built with React and TypeScript, featuring markdown support and dynamic theming.",
    tags: ["React", "Javascript", "TailwindCSS", "REST API", "Node js"],
    category: "enterprise",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    githubLink: "https://github.com/nero-gh/blog",
  },
  {
    title: "Hotel Reservation Platform",
    description:
      "A comprehensive hotel booking system with features for room reservations, availability checking, and booking management using React.",
    tags: ["React", "Javascript", "TailwindCSS", "Node.js", "MongoDB"],
    category: "enterprise",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    githubLink: "https://github.com/Nero-Gh/reservation",
  },
  {
    title: "Invoice Management App",
    description:
      "A full-stack invoice management application with features for creating, tracking, and managing invoices.",
    tags: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    category: "hackathon",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    githubLink: "https://github.com/nero-gh/amalitech-invoice-app",
  },
  {
    title: "Amalitech Website",
    description:
      "Delivered end-to-end WordPress solution using Elementor, ensuring professional and functional design tailored to client needs.",
    tags: ["WordPress", "Elementor", "PHP", "CSS"],
    category: "wordpress",
    image:
      "https://thedigitalfinder.com/wp-content/uploads/2023/12/Amalitech.jpg",
    githubLink: "https://amalitech.com/",
  },
  {
    title: "Dream Global Consult Ghana",
    description:
      "Delivered end-to-end WordPress solution using Elementor, ensuring professional and functional design tailored to client needs.",
    tags: ["WordPress", "Elementor", "PHP", "CSS"],
    category: "wordpress",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    githubLink: "https://dreamglobalconsult.com/",
  },
  {
    title: "MGA Consulting Ghana",
    description:
      "Created a modern marketing website using WordPress and Divi, focusing on user experience and conversion optimization.",
    tags: ["WordPress", "PHP", "CSS", "HTML", "Javascript"],
    category: "wordpress",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    githubLink: "#",
  },
  {
    title: "Pharmacy Management System",
    description:
      "A comprehensive pharmacy management solution featuring inventory tracking, prescription management, and sales monitoring with a modern React frontend.",
    tags: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    category: "enterprise",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2069&auto=format&fit=crop",
    githubLink: "https://github.com/Nero-Gh/Pharmacy-Management-System",
  },
  {
    title: "Movie App",
    description:
      "A modern movie browsing application built with TypeScript and React, featuring movie details, search functionality, and responsive design.",
    tags: ["React", "TypeScript", "TMDB API", "TailwindCSS"],
    category: "hackathon",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
    githubLink: "https://github.com/Nero-Gh/movie-typescript-app",
  },

  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with React and TypeScript, showcasing projects and skills.",
    tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    category: "enterprise",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    githubLink: "#",
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "enterprise", name: "Enterprise" },
  { id: "hackathon", name: "Hackathon" },
  { id: "wordpress", name: "WordPress" },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills and
            experience in web development and design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${
                  activeCategory === category.id
                    ? "bg-primary-dark dark:bg-primary-light text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full mt-4 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  {project.githubLink.includes("github.com") ? (
                    <>
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>View on GitHub</span>
                    </>
                  ) : (
                    <>
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      <span>View Live Site</span>
                    </>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/nero-gh?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white dark:bg-primary-dark dark:hover:bg-primary-light bg-primary-dark hover:bg-primary-light rounded-lg transition-colors  transform hover:scale-105 duration-300"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
