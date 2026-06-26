function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-8 text-center max-w-3xl mx-auto">
          I am a Computer Science student passionate about building
          responsive and scalable web applications using Java,
          React, Node.js and MongoDB.

          <br /><br />

          I enjoy solving Data Structures & Algorithms problems,
          learning new technologies, and creating clean user
          interfaces that provide a great user experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-slate-800 rounded-xl p-8 text-center hover:scale-105 transition duration-300">
            <h3 className="text-5xl font-bold text-cyan-400">
              400+
            </h3>

            <p className="mt-3 text-gray-300">
              DSA Problems
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 text-center hover:scale-105 transition duration-300">
            <h3 className="text-5xl font-bold text-cyan-400">
              2+
            </h3>

            <p className="mt-3 text-gray-300">
              Projects
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 text-center hover:scale-105 transition duration-300">
            <h3 className="text-5xl font-bold text-cyan-400">
              7.75
            </h3>

            <p className="mt-3 text-gray-300">
              CGPA
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;