import type { ServicesCardItem } from '@/types/services'

import DisenoWeb from '@/public/icon-website.svg'
import SemLogo from '@/public/icon-social-media.svg'
import SEO from '@/public/icon-seo.svg'
import Mktng from '@/public/icon-emailmarketing.svg'

export const SERVICES = [
    {
        id: "webdesign",
        title: "Diseño Web",
        description: "Diseño y desarrollo de Sitios Web y ecommerce autoadministrables",
        url: '/sitios-web',
        image: {
            logo: DisenoWeb,
            width: 60,
            height: 60
        },
    },
    {
        id: "sem",
        title: "SEM",
        description: "Creamos campañas digitales y gestionamos su contenido en redes sociales",
        url: '/gestion',
        image: {
            logo: SemLogo,
            width: 60,
            height: 60
        },
    },
    {
        id: "posicionamiento",
        title: "Posicionamiento SEO",
        description: "Posicionamiento de sitios web en Google y buscadores",
        url: '/posicionamiento',
        image: {
            logo: SEO,
            width: 60,
            height: 60
        },
    },
    {
        id: "emarketing",
        title: "Email Marketing",
        description: "Proyectamos, diseñamos y enviamos su publicidad vía email",
        url: '/marketing',
        image: {
            logo: Mktng,
            width: 60,
            height: 60
        },
    }
]