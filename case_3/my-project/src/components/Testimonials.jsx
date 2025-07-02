import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Ibu Rina",
      location: "Jakarta Selatan",
      rating: 5,
      comment:
        "Pelayanannya sangat memuaskan! Teknisinya datang tepat waktu dan AC langsung dingin seperti baru. Terima kasih ACin Aja!",
      image: "👩",
    },
    {
      name: "Bapak Ahmad",
      location: "Jakarta Barat",
      rating: 5,
      comment:
        "Harga terjangkau dengan kualitas servis yang bagus. Teknisinya ramah dan professional. Recommended!",
      image: "👨",
    },
    {
      name: "Ibu Sarah",
      location: "Jakarta Timur",
      rating: 5,
      comment:
        "Sudah 2 kali pakai jasa ACin Aja dan hasilnya selalu memuaskan. AC jadi dingin dan bersih, teknisi juga rapih dalam bekerja.",
      image: "👩",
    },
  ];

  return (
    <div id="testimoni" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Testimoni dari pelanggan yang telah menggunakan jasa kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <div className="relative">
                <svg
                  className="absolute left-0 top-0 transform -translate-x-3 -translate-y-3 h-8 w-8 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 mb-4 relative z-10 italic">
                  {item.comment}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <span className="text-3xl">{item.image}</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-gray-600">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-[#00AEEF] text-[#00AEEF] rounded-lg hover:bg-[#00AEEF] hover:text-white transition duration-300">
            Lihat Semua Testimoni
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
