import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Products from "@/components/Products";
import PatientPack from "@/components/PatientPack";
import Reasons from "@/components/Reasons";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <Products />
        <PatientPack />
        <Reasons />
        <Process />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
