import React from "react";

function Services({ onBook }) {
  const services = [
    {
      icon: "❄️",
      name: "Cuci AC",
      price: "70.000",
      description: "Bersihkan AC dari debu dan kotoran untuk kinerja optimal",
      includes: [
        "Pembersihan Filter",
        "Pembersihan Evaporator",
        "Test Pendinginan",
      ],
    },
    {
      icon: "🧊",
      name: "Isi Freon",
      price: "150.000",
      description: "Isi ulang freon untuk AC yang kurang dingin",
      includes: ["Cek Kebocoran", "Isi Freon R32/R410", "Uji Suhu"],
    },
    {
      icon: "🔧",
      name: "Bongkar Pasang",
      price: "200.000",
      description: "Layanan bongkar & pasang AC dengan teknisi profesional",
      includes: ["Survey Lokasi", "Instalasi Pipa", "Test Running"],
    },
    {
      icon: "⚡",
      name: "Service AC",
      price: "150.000",
      description: "Perbaikan komprehensif untuk segala masalah AC",
      includes: ["Diagnosa Masalah", "Perbaikan Komponen", "Garansi Service"],
    },
    {
      icon: "🏢",
      name: "Service Gedung",
      price: "Call",
      description: "Solusi khusus untuk AC gedung dan perkantoran",
      includes: ["Maintenance Rutin", "Pengecekan Berkala", "Service On-Call"],
    },
  ];

  return (
    <div id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan perawatan dan perbaikan AC dengan
            teknisi berpengalaman dan bergaransi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group"
            >
              {/* Service Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-[#00AEEF] group-hover:text-white transition duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.name}
                  </h3>
                  <p className="text-[#00AEEF] font-bold">
                    {service.price === "Call"
                      ? "Hubungi Kami"
                      : `Rp ${service.price}`}
                  </p>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Service Features */}
              <div className="space-y-2">
                {service.includes.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-[#00AEEF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => onBook(service.name)}
                className="w-full mt-6 py-2 px-4 bg-gray-50 text-[#00AEEF] rounded-lg font-medium hover:bg-[#00AEEF] hover:text-white transition duration-300"
              >
                Booking Layanan Ini
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
