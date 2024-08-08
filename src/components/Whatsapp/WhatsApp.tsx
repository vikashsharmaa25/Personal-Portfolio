import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
  const handleWhatsAppClick = () => {
    const countryCode = "+91";
    const phoneNumber = "8709136168";
    const message = "Hello!";
    const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="rounded-full bg-green-500">
      <FaWhatsapp
        className="cursor-pointer text-white  w-12 h-12"
        onClick={handleWhatsAppClick}
      />
    </div>
  );
}

export default WhatsApp;
