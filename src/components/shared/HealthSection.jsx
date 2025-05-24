import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../assets/svg"; // Update the path as needed

export default function HealthSection() {
  const articles = [
    {
      id: 1,
      title: "The Mental Health Benefits Backed by Science",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      category: "HEALTH",
    },
    {
      id: 2,
      title: "How Climate Change is Impacting Global Health",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=400&q=80",
      category: "HEALTH",
    },
    {
      id: 3,
      title: "Breaking Down the Latest Nutritional Guidelines",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      category: "HEALTH",
    },
    {
      id: 4,
      title: "The Role of Sleep in Immune System Support",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=400&q=80",
      category: "HEALTH",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-1 h-8 bg-red-500 mr-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Health</h2>
          <div className="flex-1 h-px bg-gray-300 ml-6"></div>
        </div>
        <Link
          to="/health"
          className="flex items-center text-red-500 hover:text-red-600 font-medium transition-colors"
        >
          View All
          <ArrowRightIcon className="ml-2 w-4 h-4" />
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <Link to={`/health/${article.id}`} className="block">
              {/* Image */}
              <div className="overflow-hidden rounded-lg mb-4 aspect-[4/3] relative">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                {/* Category */}
                <span className="text-red-500 text-sm font-semibold tracking-wide uppercase">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-red-500 transition-colors">
                  {article.title}
                </h3>

                {/* Date */}
                <p className="text-gray-500 text-sm">{article.date}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
