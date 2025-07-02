import React from "react";

function Hero({ onBook }) {
  return (
    <div
      id="beranda"
      className="pt-20 bg-gradient-to-br from-white via-blue-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
                Servis AC <span className="text-[#00AEEF]">Profesional</span>
              </h1>
              <p className="text-xl text-gray-600">
                Butuh servis AC? Kami siap memberikan layanan terbaik dengan
                teknisi berpengalaman dan bergaransi.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onBook}
                className="bg-[#00AEEF] text-white px-8 py-3 rounded-full hover:bg-[#007BFF] transform hover:scale-105 transition duration-300 shadow-lg"
              >
                Booking Sekarang
              </button>
              <a
                href="#kontak"
                className="border-2 border-[#00AEEF] text-[#00AEEF] px-8 py-3 rounded-full hover:bg-[#00AEEF] hover:text-white transform hover:scale-105 transition duration-300"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚡", text: "Respon Cepat" },
                { icon: "💯", text: "Bergaransi" },
                { icon: "👨‍🔧", text: "Teknisi Ahli" },
                { icon: "💰", text: "Harga Bersaing" },
              ].map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - AC Illustration/Animation */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-[#00AEEF] opacity-10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="p-8 bg-white rounded-2xl shadow-xl transform hover:scale-105 transition duration-500">
                <div className="w-full aspect-square relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl animate-pulse">❄️</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
                    <p className="text-[#00AEEF] font-bold text-xl">
                      ACin Aja!
                    </p>
                    <p className="text-gray-600">Dingin Senyaman Hati</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fill="white"
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,85.3C672,96,768,96,864,80C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
