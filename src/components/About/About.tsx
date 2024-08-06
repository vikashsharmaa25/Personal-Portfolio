import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function About({ scrollToContact }: any) {
  const phrase =
    "A passionate Front End Developer with a Bachelor of Computer Applications and over 1 years experience in crafting captivating digital experiences. My expertise lies in leveraging cutting-edge technologies such as ReactJS, NextJS, Apollo GraphQL, Redux, React Query, and various UI frameworks including Material UI, NextUI, SCSS, Tailwind CSS, Chakra UI, and Bootstrap. I take pride in my ability to design seamless user interfaces and components that align perfectly with the intended aesthetic, creating responsive websites that adapt gracefully to any device. My skill set also extends to proficient API integration, ensuring the seamless flow of data between the front end and back end. In addition, I am known for writing clean, well-structured code that not only functions flawlessly but also enhances the overall maintainability of projects.";

  // Split the phrase into words
  const words = phrase.split(" ");

  // State to control text truncation
  const [showFullText, setShowFullText] = useState(false);

  // Reference for in-view check
  const descriptionRef = useRef(null);
  const isInView = useInView(descriptionRef, { once: false });

  // Animation variants
  const slideUp = {
    initial: { y: 100 },
    animate: (i: any) => ({
      y: 0,
      transition: {
        delay: 0.001 * i,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const expandWidth = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        duration: 1.3,
        ease: "easeOut",
      },
    },
  };

  // Function to toggle text display
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div ref={descriptionRef} className="p-4 sm:p-12 mt-4 sm:mt-8 mb-10">
      <div className="relative text-center">
        <h1 className="sm:text-6xl text-4xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
          About Me
        </h1>

        <h1 className="sm:text-7xl text-5xl font-extrabold yellow opacity-5 text-outline text-center">
          About Me
        </h1>
      </div>

      <motion.hr
        className="md:my-2 mt-6"
        variants={expandWidth}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      />

      <div className="w-full flex flex-wrap mt-8 sm:justify-center justify-around items-center">
        {/* Render truncated or full text based on state */}
        {words.slice(0, showFullText ? words.length : 35).map((word, index) => (
          <div key={index} className="mr-1 sm:mr-2 mb-2 overflow-hidden">
            <motion.div
              className="text-lg md:text-[4vmin] font-light text-gray-50 mr-1 sm:mr-2 mb-2"
              variants={slideUp}
              custom={index}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              {word}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Toggle button */}
      <div className="text-center mt-4">
        <button
          className="px-3 sm:px-4 py-1 sm:py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition"
          onClick={toggleText}
        >
          {showFullText ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
