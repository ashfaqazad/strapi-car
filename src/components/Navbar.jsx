import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Agar tum React Router use kar rahe ho

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-green-600">
            Huda Trading Japan
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-green-600 font-medium">
              Home
            </Link>
            <Link to="/cars" className="hover:text-green-600 font-medium">
              Cars
            </Link>
            <Link to="/about" className="hover:text-green-600 font-medium">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-green-600 font-medium">
              Contact
            </Link>
          </div>

          {/* Call Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <Link to="/" className="block hover:text-green-600" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/cars" className="block hover:text-green-600" onClick={toggleMenu}>
              Cars
            </Link>
            <Link to="/about" className="block hover:text-green-600" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact" className="block hover:text-green-600" onClick={toggleMenu}>
              Contact
            </Link>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
              onClick={toggleMenu}
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
