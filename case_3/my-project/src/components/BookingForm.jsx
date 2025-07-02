import React, { useState, useEffect } from "react";

function BookingForm({ isOpen, onClose, selectedService = "" }) {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    alamat: "",
    layanan: "",
    jadwal: "",
    keterangan: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        layanan: selectedService,
      }));
    }
  }, [selectedService]);

  const services = [
    { name: "Cuci AC", price: "70.000" },
    { name: "Isi Freon", price: "150.000" },
    { name: "Bongkar Pasang AC", price: "200.000" },
    { name: "Service AC", price: "150.000" },
    { name: "Service Gedung", price: "Call" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Format pesan WhatsApp
    const message =
      `Halo, saya ingin booking servis AC%0A%0A` +
      `Nama: ${formData.nama}%0A` +
      `No. WhatsApp: ${formData.whatsapp}%0A` +
      `Alamat: ${formData.alamat}%0A` +
      `Layanan: ${formData.layanan}%0A` +
      `Jadwal: ${new Date(formData.jadwal).toLocaleString("id-ID", {
        dateStyle: "full",
        timeStyle: "short",
      })}%0A` +
      `Keterangan: ${formData.keterangan || "-"}`;

    // Redirect ke WhatsApp
    window.location.href = `https://wa.me/6282275637656?text=${message}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Booking Servis</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nama */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="nama">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                value={formData.nama}
                onChange={handleChange}
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="whatsapp">
                Nomor WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                value={formData.whatsapp}
                onChange={handleChange}
              />
            </div>

            {/* Alamat */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="alamat">
                Alamat Lengkap
              </label>
              <textarea
                id="alamat"
                name="alamat"
                required
                rows="3"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                value={formData.alamat}
                onChange={handleChange}
              />
            </div>

            {/* Layanan */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="layanan">
                Pilih Layanan
              </label>
              <select
                id="layanan"
                name="layanan"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                value={formData.layanan}
                onChange={handleChange}
              >
                <option value="">Pilih Layanan</option>
                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} - Rp {service.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Jadwal */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="jadwal">
                Tanggal & Jam Kunjungan
              </label>
              <input
                type="datetime-local"
                id="jadwal"
                name="jadwal"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                value={formData.jadwal}
                onChange={handleChange}
                min={new Date().toISOString().slice(0, 16)}
              />
            </div>

            {/* Keterangan */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="keterangan">
                Keterangan Tambahan
              </label>
              <textarea
                id="keterangan"
                name="keterangan"
                rows="3"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                value={formData.keterangan}
                onChange={handleChange}
                placeholder="Opsional"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#00AEEF] text-white rounded-lg hover:bg-[#007BFF] transition duration-300 disabled:opacity-50"
            >
              {loading ? "Memproses..." : "Kirim Booking"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
