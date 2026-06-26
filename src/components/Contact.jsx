import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <div className="space-y-6 text-lg">

          <a
            href="mailto:youremail@gmail.com"
            className="flex items-center justify-center gap-3 hover:text-cyan-400"
          >
            <FaEnvelope />
            youremail@gmail.com
          </a>

          <a
            href="https://github.com/rainishantt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 hover:text-cyan-400"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nishant-rai-939829385/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 hover:text-cyan-400"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/nishant6710/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 hover:text-cyan-400"
          >
            <FaCode />
            LeetCode
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;