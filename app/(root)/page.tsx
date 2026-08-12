import ContactZone from "@/components/homepage/ContactZone";
import HeroSection from "@/components/homepage/HeroSection";
import NuestrosClientes from "@/components/homepage/NuestrosClientes";
import OurWork from "@/components/homepage/OurWork";
import Services from "@/components/homepage/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <OurWork />
      <NuestrosClientes />
      <ContactZone />
    </>
  );
}
