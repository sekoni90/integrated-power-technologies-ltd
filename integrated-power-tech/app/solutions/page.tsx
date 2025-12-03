import Link from "next/link";
import { Building2, Server, Factory, Hospital, ShoppingBag, Wifi } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Data Centers",
    description: "Comprehensive power protection for mission-critical data center infrastructure with scalable UPS solutions.",
    features: ["High availability", "Redundant systems", "Remote monitoring", "24/7 support"],
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Data+Center+Solutions",
  },
  {
    icon: Server,
    title: "IT & Telecom",
    description: "Reliable power backup for servers, network equipment, and telecommunications infrastructure.",
    features: ["Network protection", "Server backup", "Telecom reliability", "Minimal downtime"],
    image: "https://placehold.co/600x400/2563eb/ffffff?text=IT+Solutions",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Rugged UPS systems designed for harsh industrial environments and manufacturing facilities.",
    features: ["Industrial grade", "Wide temperature range", "Dust resistant", "Heavy-duty design"],
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Industrial+Solutions",
  },
  {
    icon: Hospital,
    title: "Healthcare",
    description: "Medical-grade power protection ensuring continuous operation of critical healthcare equipment.",
    features: ["Medical compliance", "Zero downtime", "Patient safety", "Emergency backup"],
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Healthcare+Solutions",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commercial",
    description: "Power solutions for retail stores, offices, and commercial buildings to prevent data loss and downtime.",
    features: ["POS protection", "Data security", "Business continuity", "Cost effective"],
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Retail+Solutions",
  },
  {
    icon: Wifi,
    title: "Smart Buildings",
    description: "Integrated power management for modern smart buildings and IoT infrastructure.",
    features: ["IoT integration", "Energy efficiency", "Smart monitoring", "Automated systems"],
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Smart+Building+Solutions",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Power <span className="text-yellow-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Tailored UPS solutions for every industry. From data centers to healthcare facilities, 
            we provide reliable power protection that keeps your operations running.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black p-3 rounded-lg">
                    <Icon size={32} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-600 mb-2">Key Benefits:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center gap-1">
                          <span className="text-yellow-400">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Our Solutions */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our <span className="text-blue-600">Solutions</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-gray-600">
                Our experts analyze your power requirements and recommend the optimal solution
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">
                Professional installation and configuration by certified technicians
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600">
                Ongoing maintenance, monitoring, and 24/7 technical support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your <span className="text-yellow-400">Perfect Solution?</span>
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Contact our team for a free consultation and customized power protection plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
              Request Consultation
            </Link>
            <Link href="/products" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors">
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
