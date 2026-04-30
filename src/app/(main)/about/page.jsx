export const metadata = {
  title: "Dragon News - About us"
};

const AboutPage = () => {
  return (
    <div className="min-h-[49vh] bg-gradient-to-br from-gray-100 via-white to-blue-100 flex items-center justify-center px-6 py-20">

      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-white">

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-6">
          About Our News Portal
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-lg leading-relaxed text-center mb-8">
          Welcome to our news platform — your trusted source for the latest,
          fastest, and most accurate news updates from around the world.
        </p>

        {/* Sections */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">📰 Real News</h3>
            <p className="text-gray-600 text-sm">
              We provide verified and authentic news from trusted sources.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">⚡ Fast Updates</h3>
            <p className="text-gray-600 text-sm">
              Get breaking news instantly as it happens.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">🌍 Global Coverage</h3>
            <p className="text-gray-600 text-sm">
              Covering local, national, and international news.
            </p>
          </div>

        </div>

        {/* Mission */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our mission is to deliver unbiased, fast, and accurate news so that
            people can stay informed and make better decisions every day.
          </p>

          <button className="px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition transform duration-300">
            Explore News
          </button>
        </div>

      </div>
    </div>
  );
}

export default AboutPage;