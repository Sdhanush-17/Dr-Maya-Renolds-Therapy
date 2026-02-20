import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 items-center bg-[#f5efe9] rounded-2xl overflow-hidden mt-6">
      <div className="relative h-[420px] md:h-[480px]">
        <Image
          src="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
          alt="therapy"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-10">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
          Compassionate Therapy for Adults in Minneapolis
        </h1>

        <p className="mt-4 text-gray-700">
          Work with Dr. Maya Reynolds to navigate anxiety, burnout, and life transitions with clarity and confidence.
        </p>

        <a
        href="#faq"
         className="mt-6 inline-block bg-black text-white px-6 py-3 text-sm rounded-lg hover:opacity-90 transition"
        >
            Schedule a Consultation
        </a>
      </div>
    </section>
  );
}