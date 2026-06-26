import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="min-h-screen bg-slate-950 text-white flex items-center">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Section */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-lg font-medium">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold mt-4">
                        Nishant Rai
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
                        Full Stack Developer
                    </h2>

                    <p className="mt-6 text-gray-400 leading-8">
                        I build responsive web applications using Java, React, Node.js and
                        MongoDB. Passionate about solving DSA problems and creating modern
                        user experiences.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold"
                        >
                            <a
                                href="/resume/nishant..fs.pdf"
                                download
                            >
                                <button className="bg-cyan-500 px-6 py-3 rounded-lg">
                                    Download Resume
                                </button>
                            </a>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                document
                                    .getElementById("projects")
                                    .scrollIntoView({ behavior: "smooth" })
                            }
                            className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-lg font-semibold"
                        >
                            View Projects
                        </motion.button>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >
                    <div className="w-80 h-80 rounded-full bg-cyan-500/20 border-4 border-cyan-500 flex items-center justify-center">
                        <span className="text-7xl">👨‍💻</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;