export default function NewsLayout() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Featured Article - Left Side */}
          <div className="lg:col-span-2">
            <article className="relative overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="relative h-64 md:h-80 lg:h-96">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                  alt="Woman eating healthy food"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-3">
                    <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded uppercase tracking-wide">
                      HEALTH
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                    Exploring the Connection Between Gut Health and Mental Well-being
                  </h1>
                  <p className="text-gray-300 text-sm">February 24, 2025</p>
                </div>
              </div>
            </article>
          </div>

          {/* Right Side Articles */}
          <div className="space-y-6">
            {/* Sports Article */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=400&q=80"
                  alt="Olympic swimmer in action"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded uppercase tracking-wide">
                    SPORTS
                  </span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-2">
                  Olympics 2025: The Athletes to Watch
                </h2>
                <p className="text-gray-500 text-sm">February 24, 2025</p>
              </div>
            </article>

            {/* Politics Article */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80"
                  alt="Political protesters with signs"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded uppercase tracking-wide">
                    POLITICS
                  </span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-2">
                  Election 2025: Key Issues Shaping the Campaign Trail
                </h2>
                <p className="text-gray-500 text-sm">February 24, 2025</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
