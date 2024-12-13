"use client"

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-400">
            Trep Global
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-blue-400 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-400 transition duration-300"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 bg-gray-700 rounded-md py-4 px-6">
              <Link
                href="/"
                className="hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
