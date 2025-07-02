import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openBooking = (serviceName = "") => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedService("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onBook={() => openBooking()} />
      <Hero onBook={() => openBooking()} />
      <Services onBook={openBooking} />
      <Testimonials />
      <Footer />
      <BookingForm
        isOpen={isBookingOpen}
        onClose={closeBooking}
        selectedService={selectedService}
      />
    </div>
  );
}

export default App;
