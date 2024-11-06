import Link from "next/link";

const Navbar = () => (
  <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold">
          EngineerCo
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
