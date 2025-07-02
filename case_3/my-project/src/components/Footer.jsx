import React from "react";

function Footer() {
  const contactInfo = [
    { icon: "📞", label: "Telepon", value: "(021) 1234-5678" },
    { icon: "📱", label: "WhatsApp", value: "0812-3456-7890" },
    { icon: "📧", label: "Email", value: "info@acinaja.com" },
    { icon: "📍", label: "Alamat", value: "Jl. Sejuk No. 5, Jakarta" },
  ];

  const quickLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Layanan", href: "#layanan" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "FAQ", href: "#faq" },
  ];

  const socialMedia = [
    { icon: "📱", label: "Instagram", href: "#" },
    { icon: "📘", label: "Facebook", href: "#" },
    { icon: "🐦", label: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-4xl mr-2">❄️</span>
              <h2 className="text-2xl font-bold text-white">ACin Aja!</h2>
            </div>
            <p className="text-gray-400">
              Solusi terbaik untuk perawatan dan perbaikan AC Anda. Layanan
              profesional dengan teknisi berpengalaman.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-2xl hover:text-[#00AEEF] transition duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Link Cepat
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#00AEEF] transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Informasi Kontak
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-center space-x-3">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Jam Kerja</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Senin - Jumat:</span>
                <span>08:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu:</span>
                <span>09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu:</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="mt-4 text-[#00AEEF]">
                *Tersedia layanan darurat 24/7
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2024 ACin Aja! - AC Nyaman, Hidup Tenang. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-[#00AEEF]">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-sm hover:text-[#00AEEF]">
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
