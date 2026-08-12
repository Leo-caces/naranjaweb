import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

interface Props {
    image: StaticImageData | string
    title: string
    description: string
    url: string
    logo?: StaticImageData | string
}

export const ClientesCard = ({ image, title, description, url, logo }: Props) => {
    return (
        <Link href={url} className="group relative w-full h-80 isolate flex flex-col justify-end overflow-hidden pt-40 mx-auto">
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                    unoptimized
                />
            </div>
            <div 
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                backgroundImage: "url('/pattern-absurdity.png')",
                                backgroundRepeat: 'repeat',
                                left: 0,
                                top: 0,
                                height: '100%',
                                width: '100%',
                                opacity:  1,
                                zIndex: 3
                            }}>
                        </div>
            <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-gray-900 via-gray-900/40"></div>
            <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:animate-fade-in-up"
                style={{ animationDuration: '500ms', animationTimingFunction: 'ease-in-out' }}
            >
                {logo ? (
                    <div className="relative z-20 mb-3 h-20 w-28">
                        <Image
                            src={logo}
                            alt={`${title} logo`}
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                ) : null}
                <h3 
                    className="z-20 mt-3 text-3xl font-base text-white uppercase text-center"
                    style={{ animationDuration: '1500ms', animationTimingFunction: 'ease-in-out' }}
                >{title}</h3>
                <div className="z-10 gap-y-1 overflow-hidden text-xl leading-6 text-gray-300 text-center">{description}</div>

            </div>
        </Link>
    )
}

