import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-teal-800 to-teal-700 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <h1 className="text-2xl font-bold tracking-wide">LensaKit</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-teal-200 transition">Home</a>
            <a href="#about" className="hover:text-teal-200 transition">About</a>
            <a href="#services" className="hover:text-teal-200 transition">Services</a>
            <a href="#gallery" className="hover:text-teal-200 transition">Gallery</a>
            <a href="#article" className="hover:text-teal-200 transition">Article</a>
            <a href="#contact" className="hover:text-teal-200 transition">Contact</a>
          </div>

          {/* Auth Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="hover:text-teal-200 transition"
            >
              Log In
            </Link>

            <Link
              to="/register"
              className="bg-white text-teal-800 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
