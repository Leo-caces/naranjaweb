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
        thumbnail: any
        width: number
        height: number
    }
    logo: {
        icon: any
        width: number
        height: number
    }
}

export interface StrapiMedia {
  id: number | string
  documentId: string
  url: string
  alternativeText?: string
}

export interface WorkCardItem {
  id: number | string
  titleCard: string
  descriptionCard: string
  url?: string
  imageCard?: StrapiMedia
  iconCard?: StrapiMedia
}

export interface OurWorkTitleSection {
  title: string
  subTitle: string
  titleHighlighted: string
}

export interface OurWorkSection {
  ourWorkTitle: OurWorkTitleSection
  workCard: WorkCardItem[]
}
