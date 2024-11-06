import Link from "next/link";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold text-lg">EngineerCo</h3>
          <p className="text-gray-400">
            Precision and reliability in machinery services.
          </p>
        </div>
        <div className="space-y-2">
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} EngineerCo. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
