import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/types/services'

export const ServicesCard = ({ title, description, image, url }: Service) => {
    return (
        <Link href={url} className="group flex flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="relative mx-auto flex h-27 w-27 items-center justify-center rounded-full border-4 border-[#dfe4e8] bg-transparent transition-colors duration-300 group-hover:border-primary group-hover:bg-primary">
                <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-110">
                    <Image
                        src={image.logo}
                        alt={title}
                        fill
                        className="object-contain p-5"
                    />
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-lg text-slate-600">{description}</p>
            </div>
        </Link>
    )
}
