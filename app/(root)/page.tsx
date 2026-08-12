import ContactZone from "@/components/homepage/ContactZone";
import HeroSection from "@/components/homepage/HeroSection";
import NuestrosClientes from "@/components/homepage/NuestrosClientes";
import OurWork from "@/components/homepage/OurWork";
import Services from "@/components/homepage/Services";
import { getHomePage } from "@/lib/strapi";
import type { ServicesSection } from '@/types/services'
import type { OurWorkSection } from "@/types/ourwork";

export default async function Home() {
  const strapiData = await getHomePage()
  const heroSection = strapiData?.sections?.find(
    (section: any) => section.__component === 'layout.hero-section'
  )
  const servicesSection = strapiData?.sections?.find(
    (section: any) => section.__component === 'layout.services'
  ) as ServicesSection | undefined
  const ourWorkSection = strapiData?.sections?.find(
    (section: any) => section.__component === 'layout.our-work'
  ) as OurWorkSection | undefined
  const clientesSection = strapiData?.sections?.find(
    (section: any) => section.__component === 'layout.clientes'
  ) as import('@/types/clientes').ClientesSection | undefined

  return (
    <>
      <HeroSection data={heroSection} />
      {servicesSection ? <Services data={servicesSection} /> : null}
      {ourWorkSection ? <OurWork data={ourWorkSection} /> : null}
      <NuestrosClientes data={clientesSection} />
      <ContactZone />
    </>
  );
}
