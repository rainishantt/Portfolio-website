import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-slate-900 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-slate-800 px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-black transition"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;