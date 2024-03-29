import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Nabar";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";

import Email from "./components/Email";

// test 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto px-12 py-4 ">
        <HeroSection />
        <About />
        <Education />
        <Skills />
       
        <Email />
      </div>
      <Footer />
        
    </main>
  );
}
