import About from "@/components/About/About";
import Connect from "@/components/ConnectWithMe/Connect";
import ContactMe from "@/components/ContactMe/ContactMe";
import Development from "@/components/Development/Development";
import Discuss from "@/components/Discuss/Discuss";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import PrimaryHeroSection from "@/components/HeroSection/PrimaryHeroSection";
import SecondryHeroSection from "@/components/HeroSection/SecondryHeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Resume from "@/components/Resume/Resume";
import Skills from "@/components/Skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="max-w-[1350px] mx-auto poppins-regular">
        <Navbar />
        <PrimaryHeroSection />
        <SecondryHeroSection />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Development />
        <Resume />
        <Discuss />
        <Connect />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}
