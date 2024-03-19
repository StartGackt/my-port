import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Nabar";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";


async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto px-12 py-4 ">
        <HeroSection />
        <About />
        <Education />
        <Skills />

      </div>
      <Footer />
    </main>
  );
}
