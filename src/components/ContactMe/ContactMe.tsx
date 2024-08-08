import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import personLogo from "@/assets/asset 76.svg";
import { toast, Toaster } from "sonner";
import { IoIosCheckmarkCircleOutline, IoIosWarning } from "react-icons/io";

// Define the type for form data
type FormDataType = {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(contactRef, { once: false });

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = true;

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      isValid = false;
      toast.custom((id) => (
        <div
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg flex gap-2 items-center"
          onClick={() => toast.dismiss(id)}
        >
          <IoIosWarning className="text-white" />
          Please fill in all fields.
        </div>
      ));
    }

    return isValid;
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    formDataToSend.append("access_key", "b6479e1b-41be-4905-bf83-ad5f90561ba8");

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.custom((id) => (
        <div
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex gap-2 items-center"
          onClick={() => toast.dismiss(id)}
        >
          <IoIosCheckmarkCircleOutline className="text-white" />
          Your message has been sent.
        </div>
      ));
    } else {
      console.error("Error", res);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      {/* Add the Toaster component to render toasts */}
      <Toaster />

      <motion.div
        ref={contactRef}
        className="bg-gradient-to-br from-[#111827] to-[#000000] sm:p-14 p-4 rounded-[40px] mb-9 shadow-lg relative overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-[800px] h-[800px] bg-gray-900 rounded-full opacity-30 animate-pulse"></div>
        </div>

        <div className="relative z-10">
          {/* Header Animation */}
          <motion.div
            className="relative text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="sm:text-6xl text-3xl font-extrabold text-white relative z-20">
              Contact Me
            </h1>
            <span className="text-xl text-gray-400 mt-2 block opacity-80">
              {`I'm here to help! Please fill out the form to get in touch.`}
            </span>
          </motion.div>

          {/* Form Tag with onSubmit Handler */}
          <form onSubmit={onSubmit}>
            {/* Input Fields Animation */}
            <motion.div
              className="grid sm:grid-cols-2 grid-cols-1 gap-5 my-10"
              variants={containerVariants}
            >
              <motion.input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="outline-none border-2 border-transparent focus:border-[#3b82f6] rounded-full sm:p-6 p-3 font-semibold text-xl text-gray-200 bg-gray-900 shadow-md"
                variants={inputVariants}
              />

              <motion.input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="outline-none border-2 border-transparent focus:border-[#3b82f6] rounded-full sm:p-6 p-3 font-semibold text-xl text-gray-200 bg-gray-900 shadow-md"
                variants={inputVariants}
              />

              <motion.input
                type="text"
                name="mobile"
                placeholder="Mobile No."
                value={formData.mobile}
                onChange={handleChange}
                className="outline-none border-2 border-transparent focus:border-[#3b82f6] rounded-full sm:p-6 p-3 font-semibold text-xl text-gray-200 bg-gray-900 shadow-md"
                variants={inputVariants}
              />

              <motion.input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="outline-none border-2 border-transparent focus:border-[#3b82f6] rounded-full sm:p-6 p-3 font-semibold text-xl text-gray-200 bg-gray-900 shadow-md"
                variants={inputVariants}
              />
            </motion.div>

            {/* Textarea Animation */}
            <motion.div
              className="w-full relative"
              variants={containerVariants}
            >
              <motion.textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="outline-none border-2 border-transparent focus:border-[#3b82f6] rounded-3xl sm:p-6 p-3 font-semibold text-xl text-gray-200 bg-gray-900 shadow-md w-full h-[150px] resize-none"
                variants={inputVariants}
              />
            </motion.div>
            {/* Submit Button Animation */}
            <motion.div
              className="flex justify-center mt-10"
              variants={buttonVariants}
            >
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg shadow-lg hover:shadow-purple-500/50 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </div>

        {/* Decorative Image */}
        {/* <motion.div
          className="absolute bottom-0 right-0 transform translate-x-12 translate-y-16 sm:translate-x-20 sm:translate-y-20 md:translate-x-28 md:translate-y-28 lg:translate-x-32 lg:translate-y-32 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-transparent to-[#000000] rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.5 }}
        >
          <Image
            src={personLogo}
            alt=""
            width={350}
            height={350}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transform translate-x-6 translate-y-6 sm:translate-x-8 sm:translate-y-8 md:translate-x-10 md:translate-y-10 lg:translate-x-12 lg:translate-y-12"
          />
        </motion.div> */}
      </motion.div>

      {/* Divider Line Animation */}
      <motion.div
        className="sm:mt-11 mt-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <hr className="border-purple-400" />
      </motion.div>
    </>
  );
}

export default ContactMe;
