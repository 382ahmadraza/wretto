import { Link } from "react-router-dom"
import { ArrowRightIcon } from "../../assets/svg" // Make sure this icon exists and is correctly imported

export default function WorldNewsSection() {
  const articles = [
    {
      id: 1,
      category: "WORLD",
      title: "How Climate Change is Reshaping Global Landscapes",
      date: "February 24, 2025",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&h=240&q=80",
      href: "#",
    },
    {
      id: 2,
      category: "WORLD",
      title: "The Role of International Organizations in Crisis Management",
      date: "February 24, 2025",
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=400&h=240&q=80",
      href: "#",
    },
    {
      id: 3,
      category: "WORLD",
      title: "Understanding the Dynamics of Global Trade Agreements",
      date: "February 24, 2025",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&h=240&q=80",
      href: "#",
    },
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-2 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-1 h-8 bg-red-600 mr-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">World</h2>
        </div>
        <Link to="#" className="flex items-center text-red-600 hover:text-red-700 font-medium transition-colors">
          View All
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {articles.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <Link to={article.href} className="block">
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <span className="inline-block text-red-600 text-sm font-semibold tracking-wide uppercase">
                  {article.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
                  {article.title}
                </h3>
                <time className="text-gray-500 text-sm">{article.date}</time>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
