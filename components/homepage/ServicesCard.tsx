

import Image from 'next/image'
import type { ServicesCardItem } from '@/types/services'
const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL || 'http://localhost:1337'

type Props = ServicesCardItem

export const ServicesCard = ({ serviceTitle, servicesDescription, serviceIcon }: Props) => {
    const iconUrl = serviceIcon?.url ? `${STRAPI_BASE_URL}${serviceIcon.url}` : undefined
    const iconAlt = serviceIcon?.alternativeText ?? serviceTitle

    return (
        <div className="group flex flex-col items-center justify-center gap-4 p-8 text-center">
            {iconUrl ? (
                <div className="relative mx-auto flex h-27 w-27 items-center justify-center rounded-full border-4 border-[#dfe4e8] hover:border-secondary bg-transparent transition-colors duration-300 group-hover:border-primary group-hover:bg-primary">
                    <Image
                        src={iconUrl}
                        alt={iconAlt}
                        fill
                        className="object-contain p-5 hover:scale-110 transition-all"
                        unoptimized
                    />
                </div>
            ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#dfe4e8] bg-transparent text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary">
                    {serviceTitle?.[0] ?? 'S'}
                </div>
            )}
            <div>
                <h3 className="text-2xl font-bold text-slate-900">{serviceTitle}</h3>
                <p className="mt-3 text-lg text-slate-600">{servicesDescription}</p>
            </div>
        </div>
    )
}
