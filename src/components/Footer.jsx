const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-950 py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} Fiman. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
