import { TitleSection } from "../shared/TitleSection"
import { ClientesCard } from "../shared/ClientesCard"
import type { OurWorkSection, WorkCardItem } from "@/types/ourwork"
const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL || 'http://localhost:1337'

interface Props {
  data: OurWorkSection
}

const buildStrapiUrl = (path?: string) =>
  path ? `${STRAPI_BASE_URL}${path}` : undefined

const OurWork = ({ data }: Props) => {
  const { ourWorkTitle, workCard } = data

  return (
    <section className="w-full bg-white py-24 flex flex-col items-center justify-center">
      <TitleSection
        title={ourWorkTitle.title}
        highlighted={ourWorkTitle.titleHighlighted}
        description={ourWorkTitle.subTitle}
      />
      <div className="w-full px-1 mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-0.5">
        {workCard.map((card: WorkCardItem) => {
          const imageUrl = card.imageCard?.url ? (buildStrapiUrl(card.imageCard.url) ?? '/Mockup-450x300.jpg') : '/Mockup-450x300.jpg'
          const logoUrl = card.iconCard?.url ? buildStrapiUrl(card.iconCard.url) : undefined

          return (
            <ClientesCard
              key={card.id}
              image={imageUrl}
              title={card.titleCard}
              url={card.url ?? '#'}
              description={card.descriptionCard}
              logo={logoUrl}
            />
          )
        })}
      </div>
    </section>
  )
}

export default OurWork
