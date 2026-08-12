import { TitleSection } from "../shared/TitleSection"
import { ClientesCard } from "../shared/ClientesCard"
import { HOME_CONTENT } from "@/consts/homepage"
import { OURWORK } from "@/consts/ourwork"

const OurWork = () => {
  return (
    <section className="w-full bg-white py-24 flex flex-col items-center justify-center">
      <TitleSection
        title={HOME_CONTENT.work.title}
        highlighted={HOME_CONTENT.work.highlighted}
        description={HOME_CONTENT.work.description}
      />
      <div className="w-full px-1 mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-0.5">
        {OURWORK.map((card) => (
          <ClientesCard
            key={card.id}
            image={card.image.thumbnail}
            title={card.title}
            url={card.url}
            description={card.description}
            logo={card.logo.icon}
          />
        ))}
      </div>
    </section>
  )
}

export default OurWork
