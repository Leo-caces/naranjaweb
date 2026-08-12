'use client'

import { TitleSection } from "../shared/TitleSection"
import Marquee from '../shared/Marquee'
const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL || 'http://localhost:1337'
import type { ClientesSection } from '@/types/clientes'

interface Props {
  data?: ClientesSection
}

const NuestrosClientes = ({ data }: Props) => {
  const title = data?.clientesTitle

  const toUrl = (m: any) => {
    if (!m) return undefined
    const url = m.url ?? m.cliente?.url
    if (!url) return undefined
    return url.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`
  }

  const top = (data?.clientesUp ?? []).map(toUrl).filter(Boolean) as string[]
  const down = (data?.clientesDown ?? []).map(toUrl).filter(Boolean) as string[]

  return (
    <section className="w-full bg-sectionGray px-8 py-24 flex flex-col items-center justify-center">
      <TitleSection
        title={title?.title ?? 'Nuestros'}
        highlighted={title?.titleHighlighted ?? 'Clientes'}
        description={title?.subTitle ?? 'Con creatividad, pasión y compromiso respondemos a la confianza que nos entregan grandes empresas'}
      />

      <Marquee topLogos={top} downLogos={down} />
    </section>
  )
}

export default NuestrosClientes