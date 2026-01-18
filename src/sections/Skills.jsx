import { motion } from "framer-motion";

const skills = [
    {
        category: "Frontend",
        items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "PHP", "Laravel", "Codeigniter"],
    },
    {
        category: "Database and ORM",
        items: ["MongoDB", "MySQL", "Sequelize", "Eloquent", "Prisma"],
    },
    {
        category: "Tools",
        items: ["Git", "Linux"],
    },
    {
        category: "Infrastructure",
        items: ["Proxmox VE", "Redis"],
    },
    {
        category: "Domains",
        items: ["Healthcare", "Fintech", "Enterprise"],
    },
    {
        category: "CI/CD",
        items: ["Gitlab", "GitHub Actions", "Automated Deploy"],
    },
    {
        category: "Containerization",
        items: ["Docker", "Docker Compose"],
    },
    {
        category: "Security & Auth",
        items: ["JWT", "Google Auth", "OAuth"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Technical Skills
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                        A look at the technologies I work with.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
