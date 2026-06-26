function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
                    NR
                </h1>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
                    <li>
                        <a href="#home" className="hover:text-cyan-400 transition">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about" className="hover:text-cyan-400 transition">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" className="hover:text-cyan-400 transition">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="hover:text-cyan-400 transition">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#education" className="hover:text-cyan-400 transition">
                            Education
                        </a>
                    </li>

                    <li>
                        <a href="#certificates" className="hover:text-cyan-400 transition">
                            Certificates
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-cyan-400 transition">
                            Contact
                        </a>
                    </li>
                </ul>

                <a
                    href="/resume/nishant..fs.pdf"
                    download
                >
                    <button className="bg-cyan-500 px-6 py-3 rounded-lg">
                        Download Resume
                    </button>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;