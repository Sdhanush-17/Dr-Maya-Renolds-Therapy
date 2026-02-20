export default function Office() {
  return (
    <section className="py-20 bg-gray-100 rounded-2xl px-8">
      <h2 className="text-xl font-semibold text-center mb-3 text-gray-900">
        A Calm Space for Healing
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Our Minneapolis office is designed to feel quiet, private, and welcoming.
        Clients can expect a comfortable environment that supports open and
        meaningful conversations.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          alt="therapy office"
          className="rounded-xl w-full h-auto"
        />
        <img
          src="https://images.unsplash.com/photo-1493809842364-78817add7ffb"
          alt="therapy office"
          className="rounded-xl w-full h-auto"
        />
        <img
          src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
          alt="therapy office"
          className="rounded-xl w-full h-auto"
        />
      </div>
    </section>
  );
}