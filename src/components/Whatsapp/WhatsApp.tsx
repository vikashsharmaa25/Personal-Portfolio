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
    <div
      onClick={handleWhatsAppClick}
      className="rounded-full bg-white bg-opacity-90 px-3 py-2 flex justify-center items-center gap-1 cursor-pointer"
    >
      <FaWhatsapp className="text-white w-7 h-7 bg-[#128c7e] rounded-full p-1" />
      <h1 className="capitalize text-black font-medium text-sm">
        chat with me
      </h1>
    </div>
  );
}

export default WhatsApp;
