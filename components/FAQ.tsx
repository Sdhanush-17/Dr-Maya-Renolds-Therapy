export default function FAQ() {
  const faqs = [
    {
      q: "Do you offer virtual sessions?",
      a: "Yes. I offer secure telehealth sessions for clients across Minnesota.",
    },
    {
      q: "What issues do you specialize in?",
      a: "I specialize in anxiety, burnout, stress management, and major life transitions.",
    },
    {
      q: "How do I get started?",
      a: "Click the consultation button above to schedule a free initial call to see if we're a good fit.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((item, i) => (
          <div key={i} className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">{item.q}</h3>
            <p className="text-gray-600 text-sm">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}