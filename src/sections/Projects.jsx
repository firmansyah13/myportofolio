import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
    {
        title: "Zetup",
        description: "Full-stack application built with Vue.js and Express.js.",
        tech: ["Vue.js", "Express.js"],
        links: { demo: "#", code: "#" },
    },
    {
        title: "Web st24",
        description: "Web application developed using Next.js framework.",
        tech: ["Next.js"],
        links: { demo: "#", code: "#" },
    },
    {
        title: "Closebuy CMS",
        description: "Content Management System for Closebuy. Built with CodeIgniter 4.",
        tech: ["CodeIgniter 4", "PHP"],
        links: { demo: "https://closebuy.colony.id/cms/login", code: "https://gitlab.com/gumcodeindonesia/development/web/closebuy" },
    },
    {
        title: "New Noxis",
        description: "Legacy server application managed on Telkomsat infrastructure.",
        tech: ["Laravel 5"],
        links: { demo: "#", code: "#" },
    },
    {
        title: "Celtic Connection",
        description: "Web platform developed for Celtic Connection.",
        tech: ["CodeIgniter 4"],
        links: { demo: "#", code: "#" },
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                        A selection of projects I've worked on.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col hover:shadow-xl transition-all hover:scale-[1.02]"
                        >
                            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center relative group overflow-hidden">
                                <Folder size={48} className="text-gray-400 dark:text-gray-600" />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                                    {project.links.demo !== "#" && (
                                        <a href={project.links.demo} className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-200 transition-colors" title="View Demo/Live">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {project.links.code !== "#" && (
                                        <a href={project.links.code} className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-200 transition-colors" title="View Code">
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
