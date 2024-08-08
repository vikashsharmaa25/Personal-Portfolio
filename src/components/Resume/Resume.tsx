import { motion } from "framer-motion";
import React from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";

function Resume() {
  return (
    <>
      <div className="mt-10 flex justify-center items-center">
        <motion.a
          href="https://drive.google.com/file/d/1dlpX9TciORZvTcssroM1aNf6sjavZMoZ/view"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-transparent border-2 border-pink-500 text-pink-500 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center">
            <HiOutlineDocumentDownload className="mr-2" />
            Resume
          </span>
        </motion.a>
      </div>
    </>
  );
}

export default Resume;
