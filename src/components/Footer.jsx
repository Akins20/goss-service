import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Trep Global</h3>
          <p className="text-gray-400">
            Precision and reliability in industrial and commercial machinery
            services. Your trusted partner in engineering excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <div className="space-y-2">
            <Link href="/" className="hover:text-gray-300 block">
              Services
            </Link>
            <Link href="/" className="hover:text-gray-300 block">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              <p className="flex flex-row items-center gap-2">
                <span>+2347031845534</span>
                <span>+2349076353678</span>
                <span>+2349092139158</span>
              </p>
            </div>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-red-500" />
              <span>trepglobal.63@gmail.com</span>
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/engineer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://wa.me/2347031845534"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Trep Global. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
