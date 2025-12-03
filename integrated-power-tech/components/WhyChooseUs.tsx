import { Award, Headphones, Truck, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Authorized Distributor",
    description: "Official Socomec partner with certified expertise and genuine products",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance services",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick installation and deployment across all regions",
  },
  {
    icon: Shield,
    title: "Extended Warranty",
    description: "Comprehensive warranty coverage and service agreements",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose <span className="text-blue-600">Integrated Power</span> <span className="text-yellow-400">Technologies</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your trusted partner for reliable power protection solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
