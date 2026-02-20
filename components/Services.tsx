export default function Services() {
  const services = [
    {
      title: "Anxiety Therapy",
      desc: "Support to manage persistent worry, overwhelm, and stress using evidence-based approaches.",
    },
    {
      title: "Burnout & Stress",
      desc: "Recover from professional and emotional burnout and rebuild sustainable balance.",
    },
    {
      title: "Life Transitions",
      desc: "Navigate career changes, relationship shifts, and major life decisions with clarity.",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-semibold text-center mb-12">
        How I Help
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {s.title}
            </h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}