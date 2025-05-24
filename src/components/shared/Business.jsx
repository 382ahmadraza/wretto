import { Link } from "react-router-dom";
import {ArrowRightIcon } from "../../assets/svg";

export default function BusinessNewsSection() {
  return (
    <section className="w-full px-4 py-8 md:px-6 lg:px-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-1 h-8 bg-red-500 mr-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Business</h2>
        </div>
        <Link to="#" className="flex items-center text-red-500 hover:text-red-600 font-medium transition-colors">
          View All
          <ArrowRightIcon className="ml-2 w-4 h-4" />
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Article 1 - Cryptocurrency */}
        <article className="relative group cursor-pointer overflow-hidden rounded-lg">
          <div className="relative h-80 md:h-96 lg:h-80 xl:h-96">
            <img
              src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
              alt="Bitcoin cryptocurrency concept"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-opacity-50"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
              <div className="mb-4">
                <span className="inline-block text-black px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white bg-opacity-20 rounded">
                  Business
                </span>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                Understanding Cryptocurrency: Risks and Opportunities
              </h3>
              <p className="text-sm md:text-base text-gray-200">February 24, 2025</p>
            </div>
          </div>
        </article>

        {/* Article 2 - Global Trade */}
        <article className="relative group cursor-pointer overflow-hidden rounded-lg">
          <div className="relative h-80 md:h-96 lg:h-80 xl:h-96">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Global trade shipping port"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0  bg-opacity-50"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
              <div className="mb-4">
                <span className="inline-block text-black px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white bg-opacity-20 rounded">
                  Business
                </span>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                Analyzing the Latest Trends in Global Trade
              </h3>
              <p className="text-sm md:text-base text-gray-200">February 24, 2025</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}