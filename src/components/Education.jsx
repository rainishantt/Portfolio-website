function Education() {
  const education = [
    {
      year: "2023 - 2027",
      degree: "Bachelor of Technology",
      college: "Galgotias College of Engineering & Technology",
      score: "CGPA: 7.75",
    },
    {
      year: "2020 - 2022",
      degree: "Intermediate",
      college: "Sarvodaya Public School",
      score: "72%",
    },
    {
      year: "2018 - 2020",
      degree: "High School",
      college: "Saraswati Vidya Mandir",
      score: "84%",
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Education
        </h2>

        <div className="space-y-6">

          {education.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl border-l-4 border-cyan-400"
            >
              <p className="text-cyan-400 font-semibold">{item.year}</p>

              <h3 className="text-2xl font-bold mt-2">
                {item.degree}
              </h3>

              <p className="text-gray-300">
                {item.college}
              </p>

              <p className="text-gray-400 mt-2">
                {item.score}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;