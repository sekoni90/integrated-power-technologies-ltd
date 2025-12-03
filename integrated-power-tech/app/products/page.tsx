"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Filter } from "lucide-react";
import { allProducts } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();
  
  const categories = ["All", "Single Phase", "Three Phase", "Modular", "Industrial"];
  
  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-yellow-400">Products</span>
          </h1>
          <p className="text-xl text-gray-200">Complete range of Socomec UPS systems</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8 flex-wrap">
          <Filter className="text-blue-600" size={24} />
          <span className="font-semibold">Filter by:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full font-bold">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold mt-2 mb-1">{product.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{product.power}</p>
                <div className="mb-3">
                  <span className="text-xl font-bold">{product.price}</span>
                </div>
                <div className="flex gap-2">
                  <Link 
                    href={`/products/${product.id}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-center text-sm font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                  <button 
                    type="button"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-lg transition-colors"
                    aria-label="Add to cart"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
