import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Collections from "@/components/Collections";
import Lookbook from "@/components/Lookbook";
import PatientPack from "@/components/PatientPack";
import Craft from "@/components/Craft";
import Numbers from "@/components/Numbers";
import Atelier from "@/components/Atelier";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Statement />
        <Collections />
        <Lookbook />
        <PatientPack />
        <Craft />
        <Numbers />
        <Atelier />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
