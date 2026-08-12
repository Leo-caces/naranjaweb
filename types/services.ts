import type { StaticImageData } from "next/image"

export interface Service {
    id: string
    title: string
    description: string
    url: string
    image: {
        logo: StaticImageData
        width: number
        height: number
    }
}
