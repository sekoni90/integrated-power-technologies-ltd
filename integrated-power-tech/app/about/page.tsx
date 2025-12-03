import { Award, Users, Target, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-yellow-400">Us</span>
          </h1>
          <p className="text-xl text-gray-200">Your trusted partner in power protection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Leading Provider of <span className="text-blue-600">Power Solutions</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Integrated Power Technologies Ltd is a premier authorized distributor of Socomec UPS systems, 
              providing comprehensive power protection solutions to businesses across various industries.
            </p>
            <p className="text-gray-600 mb-4">
              With years of experience and technical expertise, we help organizations safeguard their 
              critical infrastructure against power disruptions, ensuring business continuity and 
              operational excellence.
            </p>
            <p className="text-gray-600">
              Our commitment to quality, reliability, and customer satisfaction has made us a trusted 
              partner for companies seeking world-class power protection solutions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white">
            <img 
              src="https://placehold.co/600x400/2563eb/ffffff?text=Our+Team" 
              alt="Our Team" 
              className="rounded-lg w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">15+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">1000+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">99.9%</h3>
            <p className="text-gray-600">Uptime Guarantee</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our <span className="text-blue-600">Core</span> <span className="text-yellow-400">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Quality First</h3>
              <p className="text-gray-600">
                We provide only genuine Socomec products backed by comprehensive warranties and support.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Customer Focus</h3>
              <p className="text-gray-600">
                Your success is our priority. We deliver tailored solutions that meet your specific needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Technical Excellence</h3>
              <p className="text-gray-600">
                Our certified engineers provide expert installation, maintenance, and support services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
