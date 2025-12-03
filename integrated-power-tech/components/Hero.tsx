"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Power Protection <span className="text-yellow-400">Solutions</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Authorized distributor of Socomec UPS systems. Reliable, efficient, and scalable power solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary inline-flex items-center justify-center gap-2">
                View Products <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
                Get Quote
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <img 
                src="/images/socomec-ups-hero.jpg" 
                alt="Socomec UPS System" 
                className="rounded-lg w-full"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/2563eb/ffffff?text=Socomec+UPS+System";
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
