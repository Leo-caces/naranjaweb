type ClientesId = 
 | "jardinamanda"
 | "radiovalpo"
 | "epicentro"
 | "vinaparticipa"
 | "resonancia"
 | "titular"
 | "sifup"
 | "quillota"


type ClienteskName =
 | "El Jardín de Amanda"
 | "Radio Valparaíso"
 | "El Epicentro"
 | "Viña Participa"
 | "Resonancia Valparaíso"
 | "Titular"
 | "Sifup"
 | "San Luis de Quillota"

export interface StrapiMedia {
	id?: number | string
	documentId?: string
	url: string
	alternativeText?: string | null
}

export interface ClientesTitleSection {
	id?: number | string
	title: string
	subTitle?: string
	titleHighlighted?: string
}

export interface ClientesSection {
	clientesTitle?: ClientesTitleSection
	clientesUp?: { cliente?: StrapiMedia }[]
	clientesDown?: { cliente?: StrapiMedia }[]
}
