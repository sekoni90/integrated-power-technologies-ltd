import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Protect Your <span className="text-yellow-400">Power Infrastructure?</span>
        </h2>
        <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Get expert consultation and customized UPS solutions for your business
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
            Request Quote
          </Link>
          <a href="tel:+2348033569306" className="inline-flex items-center gap-2 text-white hover:text-yellow-400 font-semibold">
            <Phone size={20} />
            +234 803 356 9306
          </a>
          <a href="mailto:ipt@cobranet.org" className="inline-flex items-center gap-2 text-white hover:text-yellow-400 font-semibold">
            <Mail size={20} />
            ipt@cobranet.org
          </a>
          <a href="tel:+2348033066660" className="inline-flex items-center gap-2 text-white hover:text-yellow-400 font-semibold">
            <Phone size={20} />
            +234 803 306 6660
          </a>
        </div>
      </div>
    </section>
  );
}
