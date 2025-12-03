import Link from "next/link";
import { Zap, Shield, Cpu, Building2 } from "lucide-react";

const categories = [
  {
    icon: Zap,
    title: "Single Phase UPS",
    description: "Compact and reliable power protection for small to medium applications",
    link: "/products/single-phase",
  },
  {
    icon: Shield,
    title: "Three Phase UPS",
    description: "High-performance solutions for critical infrastructure and data centers",
    link: "/products/three-phase",
  },
  {
    icon: Cpu,
    title: "Modular UPS",
    description: "Scalable and flexible power systems that grow with your needs",
    link: "/products/modular",
  },
  {
    icon: Building2,
    title: "Industrial UPS",
    description: "Rugged solutions for harsh environments and industrial applications",
    link: "/products/industrial",
  },
];

export default function ProductCategories() {
  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-blue-600">Product</span> <span className="text-yellow-400">Range</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive Socomec UPS solutions for every power protection need
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Link 
              key={index}
              href={category.link}
              className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-600 text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
