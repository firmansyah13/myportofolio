import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Placeholder for Profile Image or Illustration */}
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-200 dark:border-gray-800 flex items-center justify-center overflow-hidden">
                            <span className="text-gray-400 dark:text-gray-600 text-lg">Profile Image Placeholder</span>
                        </div>
                        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-blue-100 dark:bg-blue-900/20 rounded-2xl"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            A dedicated Software Engineer experienced in building robust web applications.
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I specialize in JavaScript/TypeScript ecosystems, with a deep focus on React for frontend and Node.js for backend services. My journey started with a curiosity for how things work on the web, leading me to develop a strong foundation in full-stack development.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the community. I believe in writing clean, maintainable code and building products that provide genuine value.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</h4>
                                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</h4>
                                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
