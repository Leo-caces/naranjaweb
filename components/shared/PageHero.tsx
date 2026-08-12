import Image from 'next/image'
import heroImage from '@/public/nosotros.webp'

const PageHero = () => {
  return (
    <section className="relative h-[38vh] min-h-200 w-full overflow-hidden">
        <Image 
            src={heroImage} 
            alt="Hero Image from Naranja Web"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
            unoptimized
        />
        <div className="absolute inset-0 bg-secondary/10"></div>
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

    </section>
  )
}

export default PageHero
