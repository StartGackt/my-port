"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiContactsFill } from "react-icons/ri";
import {MdDownload} from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="lg:py-16 pt-12">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
  sequence={[
    "Thestart",
    1000,
    "Software Engineer",
    1000,
    "Ai Developer",
    1000,
    "Data Scientist",
    1000,
    "Cyber Security",
    1000,
  ]}
  wrapper="span"
  speed={8}
  repeat={Infinity}
  style={{ 
    fontSize: "1em", 
    display: "inline-block", 
    background: "linear-gradient(105.7deg, rgb(0, 238, 179) 23.2%, rgb(49, 100, 255) 100.5%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent" 
  }}
/>

          </h1>
          <p className="text-base sm:text-lg mb-6 lg:text-xl text-3xl font-bold leading-10">
  <span className="text-[#ecebeb]">Hello,</span>
  <span className="text-[#16f2b3]"> This is Thestart ,</span>
  <span className="text-[#dfdfe4]"> Im a Professional </span>
  <span className="text-[#16f2b3]">  Software Developer.</span>
</p>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center mt-3 place-self-center">
  <a
    href="/#contact"
    className="px-6 inline-block py-3 w-full sm:w-auto mb-3 sm:mb-0 mr-0 sm:mr-4 text-white bg-gradient-to-r from-indigo-400 to-cyan-400 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center justify-center gap-1 hover:gap-3"
  >
    <span>Hire Me</span>
    <RiContactsFill size={16} />
  </a>
  <a
    href="/"
    className="px-4 sm:px-6 inline-block py-3 w-full sm:w-auto mb-3 sm:mb-0 mr-0 sm:mr-4 text-white bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center justify-center gap-1 hover:gap-3"
  >
    <span>Get Resume</span>
    <MdDownload size={16} />
  </a>
</div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
      <div className="col-span-4 place-self-center mt-4 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative overflow-hidden">
      <Image
  src="/images/hero-image.jpg"
  alt="hero image"
  width={250} // Add width property
  height={250} // Add height property
  className="rounded-full absolute inset-0 w-full h-full object-cover transition-transform duration-500 cursor-pointer"
  style={{
    transform: 'rotate(-10deg)', // Initial rotation
    animation: 'moveUp 2s infinite alternate', // Animation
  }}
/>

  <style jsx>{`
    @keyframes moveUp {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(5px); 
      }
    }
  `}</style>
</div>





        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;