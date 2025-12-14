import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold">
          lakshya<span className="text-indigo-600">.ai</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            to="/login"
            className="
              px-5 py-2 rounded-xl font-medium
              bg-white text-indigo-600
              shadow-[0_6px_0_#e5e7eb,0_12px_20px_rgba(0,0,0,0.1)]
              hover:-translate-y-0.5
              transition-all duration-200
            "
          >
            Login
          </Link>

          <button
            className="
              px-5 py-2 rounded-xl font-medium
              bg-indigo-600 text-white
              shadow-[0_6px_0_#4338ca,0_12px_25px_rgba(79,70,229,0.4)]
              hover:-translate-y-0.5
              transition-all duration-200
            "
          >
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}
