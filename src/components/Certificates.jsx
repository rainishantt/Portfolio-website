function Certificates() {
  const certificates = [
    "Infosys ReactJS Developer Program",
    "Java Beginner to Advanced",
    "100 Days LeetCode Badge",
  ];

  return (
    <section id="certificates" className="py-20 bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Certificates
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                🏆 Certificate
              </h3>

              <p className="mt-4 text-gray-300">
                {certificate}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Certificates;