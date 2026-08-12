'use client'

import { TitleSection } from "../shared/TitleSection"
import Marquee from '../shared/Marquee'
import { HOME_CONTENT } from "@/consts/homepage"

const NuestrosClientes = () => {
  return (
    <section className="w-full bg-sectionGray px-8 py-24 flex flex-col items-center justify-center">
      <TitleSection
        title={HOME_CONTENT.clients.title}
        highlighted={HOME_CONTENT.clients.highlighted}
        description={HOME_CONTENT.clients.description}
      />

      <Marquee />
    </section>
  )
}

export default NuestrosClientes
