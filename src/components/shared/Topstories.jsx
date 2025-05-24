export default function Topstories() {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6">
      {/* Top Stories Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
          Top Stories
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Featured Article */}
        <div className="lg:col-span-2">
          <div className="relative group cursor-pointer">
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=900&q=80"
                alt="Understanding the human brain"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-3">
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-sm font-medium uppercase tracking-wide">
                    SCIENCE
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                  Understanding the Human Brain: New Insights from Neuroscience
                </h2>
                <p className="text-gray-200 text-sm md:text-base">February 24, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Panel */}
        <div className="lg:col-span-1">
          <div className="bg-red-500 text-white p-6 lg:p-8 rounded-lg h-full flex flex-col justify-center">
            <div className="mb-4">
              <p className="text-sm font-medium uppercase tracking-wide mb-2 opacity-90">
                NEVER MISS A HEADLINE!
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-4">
                Subscribe to our newsletter for daily updates.
              </h3>
              <p className="text-red-100 mb-6">
                Get the latest stories delivered straight to your inbox.
              </p>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Articles Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Article */}
        <article className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg mb-4">
            <img
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80"
              alt="People crossing a busy street intersection with Subway sign visible"
              className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="space-y-3">
            <span className="inline-block text-red-500 text-sm font-semibold uppercase tracking-wide">WORLD</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
              Global Migration Trends: Causes and Consequences
            </h2>
            <p className="text-gray-600 text-sm md:text-base">February 24, 2025</p>
          </div>
        </article>

        {/* Right Article (Fixed ARTS Image) */}
        <article className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg mb-4">
            <img
              src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=900&q=80"
              alt="Painter in studio working on an abstract canvas"
              className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="space-y-3">
            <span className="inline-block text-red-500 text-sm font-semibold uppercase tracking-wide">ARTS</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
              Exploring the Impact of AI on Creative Industries
            </h2>
            <p className="text-gray-600 text-sm md:text-base">February 24, 2025</p>
          </div>
        </article>
      </div>
    </div>
  );
}
