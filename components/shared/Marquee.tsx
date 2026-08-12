'use client'

import Marquee from 'react-fast-marquee'

type Props = {
	topLogos?: string[]
	downLogos?: string[]
}

const defaultTop = [
	'/gsp.svg',
	'/logo-clientes-creativeline.png',
	'/symbols.svg',
	'/logo-clientes_radiovalparaiso.svg',
	'/vinaparticipa.png',
]

const defaultDown = [
	'/logo-clientes_resonanciavalparaiso.svg',
	'/borneopro.svg',
	'/logo-clientes_ingeproc.svg',
	'/logo-clientes_corporacionwanderers-color.png',
	'/logo-clientes_sanluissa.svg'
]

export default function MarqueeComponent({ topLogos, downLogos }: Props) {
	const top = topLogos && topLogos.length ? topLogos : defaultTop
	const down = downLogos && downLogos.length ? downLogos : defaultDown

	return (
		<div className="w-full mt-16 mx-auto md:px-40">
			<Marquee
				autoFill
				speed={50}
				pauseOnHover
				gradient
				gradientColor="#f1f3f5"

				className='flex items-center mb-10 py-2.5 select-none cursor-pointer'
			>
				{top.map((logo) => (
					<img key={logo} src={logo} alt="logo" className="mx-8 w-40 h-20 aspect-auto grayscale hover:grayscale-0" />
				))}
			</Marquee>
			<Marquee
				autoFill
				speed={50}
				pauseOnHover
				gradient
				gradientColor="#f1f3f5"
				direction='right'

				className='flex items-center py-2.5 select-none cursor-pointer'
			>
				{down.map((logo) => (
					<img key={logo} src={logo} alt="logo" className="mx-8 w-40 h-30 grayscale hover:grayscale-0" />
				))}
			</Marquee>
		</div>
	)
}