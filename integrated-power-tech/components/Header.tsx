"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X, Phone, Mail } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-black text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop View */}
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex gap-4">
              <a href="tel:+2348033569306" className="flex items-center gap-1 hover:text-yellow-400">
                <Phone size={14} />
                <span>+234 803 356 9306</span>
              </a>
              <a href="mailto:ipt@cobranet.org" className="flex items-center gap-1 hover:text-yellow-400">
                <Mail size={14} />
                <span>ipt@cobranet.org</span>
              </a>
            </div>
          </div>
          
          {/* Mobile View */}
          <div className="md:hidden flex justify-between items-center text-xs">
            <a href="tel:+2348033569306" className="flex items-center gap-1 hover:text-yellow-400">
              <Phone size={12} />
              <span>+234 803 356 9306</span>
            </a>
            <div className="flex gap-2">
              <Link href="/signin" className="text-white hover:text-yellow-400 font-medium">
                Sign In
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/register" className="text-yellow-400 hover:text-yellow-300 font-medium">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <div className="text-lg sm:text-xl md:text-2xl font-bold">
              <span className="text-blue-600">Integrated</span>
              <span className="text-yellow-400"> Power</span>
              <span className="text-black hidden sm:inline"> Technologies Ltd</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">Products</Link>
            <Link href="/solutions" className="text-gray-700 hover:text-blue-600 font-medium">Solutions</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-300">
              <Link href="/cart" className="relative">
                <ShoppingCart className="text-blue-600 hover:text-blue-700" size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link 
                href="/signin" 
                className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-600 transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/register" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Register
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="text-blue-600" size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px]">
                  {cartCount}
                </span>
              )}
            </Link>
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-2 rounded">Home</Link>
            <Link href="/products" className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-2 rounded">Products</Link>
            <Link href="/solutions" className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-2 rounded">Solutions</Link>
            <Link href="/about" className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-2 rounded">About</Link>
            <Link href="/contact" className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-2 rounded">Contact</Link>
            <Link href="/cart" className="py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-2 rounded flex items-center justify-between">
              <span>Shopping Cart</span>
              {cartCount > 0 && (
                <span className="bg-yellow-400 text-black text-xs rounded-full px-2 py-1 font-bold">
                  {cartCount} items
                </span>
              )}
            </Link>
            <div className="border-t border-gray-200 mt-3 pt-3">
              <Link href="/signin" className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-2 rounded">Sign In</Link>
              <Link href="/register" className="block py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-2 rounded text-center">Register Now</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
