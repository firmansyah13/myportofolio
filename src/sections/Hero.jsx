import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import wayangImage from "../assets/wayang.png";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-white dark:bg-gray-950"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
                <motion.img
                    src={wayangImage}
                    alt="Wayang Gunungan"
                    className="w-[80%] md:w-[50%] max-w-[600px] h-auto opacity-10 dark:opacity-5 object-contain"
                    animate={{
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-sm md:text-base font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-2">
                        Software Engineer
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary-600 dark:from-blue-400 dark:to-primary-400">Fiman</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                        I build accessible, pixel-perfect, and performant web experiences.
                        Passionate about creating software that solves real-world problems.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2"
                    >
                        View My Work <ArrowRight size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-105 border border-gray-200 dark:border-gray-700"
                    >
                        Contact Me
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 flex items-center justify-center gap-6"
                >
                    <a href="https://github.com/firmansyah13" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/em-firmansyah-asyono-putro-0752a5185" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:firmansyah13019@gmail.com" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
