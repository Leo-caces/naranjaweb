import Image from "next/image"
import HeroBg from '@/public/bg-hero.jpg'
import { IoChevronDownOutline } from "react-icons/io5"
import Link from "next/link";
import { HOME_CONTENT } from "@/consts/homepage"

export function HeroSection() {
    const { heading, subHeading, link } = HOME_CONTENT.hero

  return (
    <div className="relative h-[50vh] md:h-[90vh] w-full inset-0 overflow-hidden">
        <Image
            src={HeroBg}
            alt="Portada de Naranja Web"
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            priority
            className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-secondary/50"></div>
        <div 
            className="absolute inset-0"
            style={{
                backgroundImage: "url('/pattern-absurdity.png')",
                backgroundRepeat: 'repeat',
                left: 0,
                top: 0,
                height: '100%',
                width: '100%',
                opacity:  1,
                position: 'absolute',
                zIndex: 3
            }}
        ></div>
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="font-semibold text-white text-5xl md:text-[90px] mb-2 animate-fade-in-right">{heading}</h1>
                <p className="text-white text-2xl md:text-4xl mb-6 animate-fade-in-right animate-delay-400">{subHeading}</p>
                <Link 
                    className="inline-flex items-center justify-center px-5 py-3 text-xl bg-background rounded-full hover:scale-110 transform transition-all text-white"
                    href={link.href}
                >
                    {link.label}
                </Link>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white">
                                <IoChevronDownOutline
                                    size={50}
                                    className="animate-fade-out-down"
                                    style={{ animationDuration: '1500ms', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}
                                />
            </div>
        </div>
    </div>
  )
}

export default HeroSection
