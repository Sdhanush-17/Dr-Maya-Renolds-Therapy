export default function About() {
  return (
    <section className="py-20 grid md:grid-cols-2 gap-10 items-center">
      <img
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
        alt="Dr Maya Reynolds"
        className="rounded-xl w-full h-auto"
      />

      <div>
        <h2 className="text-3xl font-semibold mb-4">
          Meet Dr. Maya Reynolds
        </h2>

        <p className="text-gray-600 mb-4">
          Dr. Reynolds is a Minneapolis-based therapist specializing in
          anxiety, burnout, and life transitions. Her approach is warm,
          collaborative, and grounded in evidence-based care.
        </p>

        <p className="text-gray-600">
          She works with adults seeking clarity, emotional balance,
          and meaningful, lasting change.
        </p>
      </div>
    </section>
  );
}