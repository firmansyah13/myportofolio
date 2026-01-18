import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Software Engineer (Full-Stack)",
        company: "PT. Indonesia Bisnis Digital",
        location: "Indonesia",
        period: "April 2023 – Present",
        description: [
            "Developed full-stack applications using Express.js, Sequelize ORM, and Vue.js",
            "Designed and implemented RESTful APIs for internal and customer-facing systems",
            "Integrated Proxmox VE API for VM management and infrastructure monitoring",
            "Built and maintained a ticketing system with issue tracking and notifications",
            "Implemented Google OAuth 2.0 authentication using Google Cloud Platform",
            "Modeled relational databases using Sequelize migrations and associations",
            "Automated testing and deployments using CI/CD pipelines",
        ],
    },
    {
        role: "Software Engineer (Full-Stack)",
        company: "PT. Averin Informatika Teknologi",
        location: "Indonesia",
        period: "February 2023 – April 2023",
        description: [
            "Developed full-stack features for a medical application using Laravel",
            "Optimized SQL queries and improved application performance",
            "Implemented Redis caching to reduce database load",
            "Collaborated with stakeholders to translate healthcare requirements into solutions",
        ],
    },
    {
        role: "Software Engineer (Frontend-Focused Full-Stack)",
        company: "PT. Global Indo Multimedia",
        location: "Indonesia",
        period: "August 2022 – January 2023",
        description: [
            "Developed PPOB web applications using Next.js",
            "Integrated frontend components with backend APIs",
            "Improved performance and SEO through optimized rendering strategies",
        ],
    },
    {
        role: "Software Engineer",
        company: "CV. Gumcode",
        location: "Indonesia",
        period: "August 2020 – November 2020",
        description: [
            "Developed full-stack applications using Laravel and CodeIgniter",
            "Integrated MySQL databases and implemented CRUD functionality",
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Professional Experience
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-3 top-1 bg-blue-600 h-6 w-6 rounded-full border-4 border-white dark:border-gray-950 flex items-center justify-center">
                                <Briefcase size={12} className="text-white" />
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {exp.role}
                                    </h3>
                                    <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                        {exp.company}
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 sm:mt-0 text-sm font-medium">
                                    <Calendar size={16} className="mr-2" />
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 dark:text-gray-300">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
