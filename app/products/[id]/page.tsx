"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { getProductById } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const productId = parseInt(params.id as string);
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`${product.name} has been added to your cart!`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-4"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full rounded-lg"
            />
            <div className="mt-4">
              <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                {product.category}
              </span>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-blue-600 font-semibold text-xl">{product.power}</span>
              <span className="text-4xl font-bold text-black">{product.price}</span>
            </div>

            <p className="text-gray-700 text-lg mb-8">{product.description}</p>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-12">
              <button 
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <ShoppingCart size={24} />
                Add to Cart
              </button>
              <Link 
                href="/contact"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center"
              >
                Request Quote
              </Link>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Related <span className="text-blue-600">Products</span>
          </h2>
          <div className="text-center">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
