import React from "react";
import { CiMobile1 } from "react-icons/ci";
import { FaHeadphones, FaCar, FaMountain, FaMoneyBill } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="min-h-screen mt-16">
        <div className="relative text-center ">
          <h1 className="sm:text-6xl text-4xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            About Me
          </h1>

          <h1 className="sm:text-7xl text-5xl font-extrabold yellow opacity-5 text-outline text-center">
            About Me
          </h1>
        </div>
        <div className="flex xl:flex-row flex-col justify-between sm:mt-20 mt-10">
          <div className="xl:w-1/2 w-full">
            <div className=" flex justify-start items-start">
              <div className="relative">
                <h1 className="sm:text-6xl text-5xl font-extrabold yellow opacity-5 text-outline text-center ">
                  I Love
                </h1>
                <h1 className="sm:text-5xl text-4xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-shadow text-center w-full">
                  I Love
                </h1>
              </div>
            </div>
            <div className="mt-10 xl:block flex overflow-x-auto items-center gap-5 sm:p-0 p-1 hide-scrollbar">
              <div className="flex gap-4 items-center">
                <div className="flex gap-4 items-center bg-white text-[#619CE4] py-2 px-5 text-2xl font-bold rounded-full min-w-80">
                  <FaHeadphones className="text-5xl" />
                  <h1>Listening to music</h1>
                </div>
                <div className="flex gap-4 items-center bg-white text-[#549AF0] py-2 px-5 text-2xl font-bold rounded-full">
                  <FaCar className="text-5xl" />
                  <h1>Travelling</h1>
                </div>
              </div>
              <div className="flex gap-4 items-center xl:mt-4">
                <div className="flex gap-4 items-center bg-white text-[#6EC17D] py-2 px-5 text-2xl font-bold rounded-full">
                  <FaMountain className="text-5xl" />
                  <h1>Mountain</h1>
                </div>
                <div className="flex gap-4 items-center bg-white text-[#06A048] py-2 px-5 text-2xl font-bold rounded-full">
                  <FaMoneyBill className="text-5xl" />
                  <h1>Money</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 w-full flex items-center gap-4 xl:mt-0 mt-4 xl:overflow-hidden overflow-x-auto hide-scrollbar">
            <div className="text-center bg-[#181818] xl:w-[300px] xl:h-[300px] h-auto flex xl:flex-col justify-center items-center xl:rounded-[31%] xl:text-4xl text-5xl font-bold xl:p-0 p-4 gap-4">
              <h1 className="yellow xl:text-6xl text-5xl font-extrabold">1+</h1>
              <h1>Years</h1>
              <h1>Experience</h1>
            </div>
            <div className="text-center bg-[#181818] xl:w-[300px] xl:h-[300px] h-auto flex xl:flex-col justify-center items-center xl:rounded-[31%] xl:text-4xl text-5xl font-bold xl:p-0 p-4 gap-4">
              <h1 className="yellow xl:text-6xl text-5xl font-extrabold">8+</h1>
              <h1>Project</h1>
              <h1>Completed</h1>
            </div>
          </div>
        </div>
        <div className="bg-[#181818] mt-10 sm:p-12 p-5 rounded-[55px]">
          <h1 className="sm:text-xl tracking-wide leading-loose">
            A passionate Front End Developer with a Master&apos;s in Computer
            Application and over 4 years of experience in crafting captivating
            digital experiences. My expertise lies in leveraging cutting-edge
            technologies such as ReactJS, NextJS, Apollo GraphQL, Redux, React
            Query, and various UI frameworks including Material UI, NextUI,
            SCSS, Tailwind CSS, Chakra UI, and Bootstrap. I take pride in my
            ability to design seamless user interfaces and components that align
            perfectly with the intended aesthetic, creating responsive websites
            that adapt gracefully to any device. My skill set also extends to
            proficient API integration, ensuring the seamless flow of data
            between the front end and back end. In addition, I am known for
            writing clean, well-structured code that not only functions
            flawlessly but also enhances the overall maintainability of
            projects. With a track record of contributing to well-known products
            like CricTracker, SportsBuzz, and Epiko Market, I am committed to
            pushing the boundaries of web development to deliver exceptional
            digital solutions.
          </h1>
        </div>
        <div className="text-center my-20 flex justify-center items-center">
          <button className="px-10 py-4 bg-[#FEB901] hover:bg-[#FEB901] hover:text-black duration-200 text-2xl font-semibold rounded-full bg-opacity-5 border border-[#FEB901] yellow flex gap-4 items-center">
            <CiMobile1 className="text-3xl font-extrabold" />
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
