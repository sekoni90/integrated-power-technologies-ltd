import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-600">Integrated</span>
              <span className="text-yellow-400"> Power</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Leading provider of Socomec UPS systems and comprehensive power protection solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-400" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-400" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-white">Solutions</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products/netys-rt" className="text-gray-400 hover:text-white">NETYS RT</Link></li>
              <li><Link href="/products/netys-pr" className="text-gray-400 hover:text-white">NETYS PR</Link></li>
              <li><Link href="/products/green-power" className="text-gray-400 hover:text-white">Green Power</Link></li>
              <li><Link href="/products/masterys" className="text-gray-400 hover:text-white">MASTERYS</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>3B Ijora Causeway, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={20} />
                <a href="tel:+2348033569306" className="hover:text-white">+234 803 356 9306</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={20} />
                <a href="mailto:ipt@cobranet.org" className="hover:text-white">ipt@cobranet.org</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={20} />
                <a href="mailto:support@iptng.com" className="hover:text-white">support@iptng.com</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={20} />
                <a href="tel:+2348033066660" className="hover:text-white">+234 803 306 6660</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Integrated Power Technologies Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
