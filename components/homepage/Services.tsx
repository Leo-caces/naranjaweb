import { TitleSection } from "../shared/TitleSection"
import { ServicesCard } from "./ServicesCard"
import { HOME_CONTENT } from "@/consts/homepage"
import { SERVICES } from "@/consts/services"

const Services = () => {
  return (
    <section className="w-full bg-sectionGray px-8 py-24 flex flex-col items-center justify-center">
      <TitleSection
        title={HOME_CONTENT.services.title}
        highlighted={HOME_CONTENT.services.highlighted}
        description={HOME_CONTENT.services.description}
      />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-start justify-between mt-8">
        {SERVICES.map((service) => (
          <ServicesCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services
