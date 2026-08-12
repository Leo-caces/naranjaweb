export interface StrapiMedia {
    id: number | string
    documentId: string
    url: string
    alternativeText?: string
}

export interface ServicesCardItem {
    id: number | string
    serviceTitle: string
    servicesDescription: string
    serviceIcon?: StrapiMedia
}

export interface ServicesTitleSection {
    title: string
    subTitle: string
    titleHighlighted: string
}

export interface ServicesSection {
    servicesCard: ServicesCardItem[]
    servicesTitle: ServicesTitleSection
}
