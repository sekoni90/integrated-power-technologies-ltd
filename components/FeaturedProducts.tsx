"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { allProducts } from "@/lib/products";
import { useCart } from "@/context/CartContext";

// Show first 6 products as featured
const products = allProducts.slice(0, 6);

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  return (
    <section className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-blue-600">Socomec</span> <span className="text-yellow-400">Products</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our range of industry-leading UPS systems
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                {product.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-600 font-semibold">{product.power}</span>
                <span className="text-2xl font-bold text-black">{product.price}</span>
              </div>
              <div className="flex gap-2">
                <Link 
                  href={`/products/${product.id}`}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center font-semibold transition-colors"
                >
                  View Details
                </Link>
                <button 
                  type="button"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-lg transition-colors"
                  aria-label="Add to cart"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/products" className="btn-primary inline-flex items-center gap-2">
          View All Products
        </Link>
      </div>
    </section>
  );
}
