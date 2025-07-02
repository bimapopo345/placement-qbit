import React from "react";

function Navbar({ onBook }) {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo */}
            <div className="text-3xl font-bold text-[#00AEEF] flex items-center">
              <span className="text-4xl mr-2">❄️</span>
              <span>ACin Aja!</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#beranda"
              className="text-gray-600 hover:text-[#00AEEF] font-medium"
            >
              Beranda
            </a>
            <a
              href="#layanan"
              className="text-gray-600 hover:text-[#00AEEF] font-medium"
            >
              Layanan
            </a>
            <a
              href="#testimoni"
              className="text-gray-600 hover:text-[#00AEEF] font-medium"
            >
              Testimoni
            </a>
            <a
              href="#kontak"
              className="text-gray-600 hover:text-[#00AEEF] font-medium"
            >
              Kontak
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-[#00AEEF]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <button
              onClick={onBook}
              className="bg-[#00AEEF] text-white px-6 py-2 rounded-full hover:bg-[#007BFF] transition duration-300"
            >
              Booking Sekarang
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
