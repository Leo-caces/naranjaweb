import { TitleSection } from "../shared/TitleSection"
import { ServicesCard } from "./ServicesCard"
import type { ServicesSection } from '@/types/services'

interface Props {
  data: ServicesSection
}

const Services = ({ data }: Props) => {
  const { servicesTitle, servicesCard } = data

  return (
    <section className="w-full bg-sectionGray px-8 py-24 flex flex-col items-center justify-center">
      <TitleSection
        title={servicesTitle.title}
        highlighted={servicesTitle.titleHighlighted}
        description={servicesTitle.subTitle}
      />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-start justify-between mt-8">
        {servicesCard.map((service) => (
          <ServicesCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services