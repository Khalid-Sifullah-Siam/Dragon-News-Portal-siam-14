const CareerPage = () => {
  return (
    <div className="min-h-[40vh] bg-gradient-to-br from-gray-100 via-white to-red-100 px-6 py-20 flex items-center justify-center">

      <div className="max-w-5xl w-full bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-white">

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-4">
          Journalism Career Path
        </h1>

        <p className="text-center text-gray-600 text-lg mb-10">
          Follow this roadmap to build your career in news, media, and journalism.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">📰 Step 1</h2>
            <h3 className="font-semibold text-gray-800 mb-2">Understand Journalism</h3>
            <p className="text-gray-600 text-sm">
              Learn how news works, ethics, and how information is verified.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">✍️ Step 2</h2>
            <h3 className="font-semibold text-gray-800 mb-2">News Writing</h3>
            <p className="text-gray-600 text-sm">
              Practice writing clear, short, and accurate news articles.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">🎤 Step 3</h2>
            <h3 className="font-semibold text-gray-800 mb-2">Reporting & Interviews</h3>
            <p className="text-gray-600 text-sm">
              Learn how to gather information from real sources and interviews.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">🌐 Step 4</h2>
            <h3 className="font-semibold text-gray-800 mb-2">Digital Media Skills</h3>
            <p className="text-gray-600 text-sm">
              Learn online publishing, SEO, and social media news sharing.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">🧾 Step 5</h2>
            <h3 className="font-semibold text-gray-800 mb-2">Build Experience</h3>
            <p className="text-gray-600 text-sm">
              Work with news portals, blogs, or internships to gain experience.
            </p>
          </div>

          <div className="p-6 bg-red-500 text-white rounded-2xl shadow-md hover:scale-105 transition flex items-center justify-center">
            <h3 className="text-xl font-bold text-center">
              🏆 Become a Journalist
            </h3>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CareerPage;