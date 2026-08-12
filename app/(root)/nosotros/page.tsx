import PageContact from '@/components/shared/PageContact'
import  PageHero  from '@/components/shared/PageHero'

const Nosotros = () => {
  return (
    <div className='bg-sectionGray'>
      <PageHero />
      <div className='bg-white w-full h-auto'>
        <section className="mx-auto max-w-6xl px-6 py-20 flex flex-col">
          <h1 className='font-bold text-primary text-5xl uppercase'>Nosotros</h1>
          <div className='w-10 bg-[#ffd43b] h-0.5 mb-10'></div>
          <p className='text-xl text-fontGray'>Naranja Web: Somos una agencia de marketing digital dedicada a la gestión y desarrollo de contenidos online. Posicionamos su empresa a través canales digitales: Sitios Web, Redes Sociales, Buscadores y también vía Email Marketing.

  Un equipo de profesionales capacitados para entregar soluciones y así destacar su empresa de manera eficaz en medios digitales.

  ¡Actualizarnos es clave para continuar vigentes!</p>
        </section>
      </div>
      <PageContact />
    </div>
  )
}

export default Nosotros
