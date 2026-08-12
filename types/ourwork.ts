import type { StaticImageData } from "next/image"

type OurWorkId = 
 | "jardinamanda"
 | "radiovalpo"
 | "epicentro"
 | "vinaparticipa"
 | "resonancia"
 | "titular"
 | "sifup"
 | "quillota"


type OurWorkName =
 | "El Jardín de Amanda"
 | "Radio Valparaíso"
 | "El Epicentro"
 | "Viña Participa"
 | "Resonancia Valparaíso"
 | "Titular"
 | "Sifup"
 | "San Luis de Quillota"

export interface OurWork {
    id: OurWorkId
    title: OurWorkName
    description: string
    url: string
    image: {
        thumbnail: StaticImageData
        width: number
        height: number
    }
    logo: {
        icon: StaticImageData
        width: number
        height: number
    }
}
