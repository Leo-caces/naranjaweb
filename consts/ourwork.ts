import type { OurWork } from '@/types/ourwork'

// Images
import JardinThumbnail from '@/public/Mockup-450x300.jpg'
import RadioThumbnail from '@/public/radio-thumb-450x300.jpg'
import EpicentroThumbnail from '@/public/thumb-elepicentro-2-450x300.jpg'
import ParticipaThumbnail from '@/public/thumb-vinaparticipa-450x300.jpg'
import ResonanciaThumbnail from '@/public/thumb-resonanciavalparaiso-1-450x300.jpg'
import TitularThumbnail from '@/public/thumb-titular-3-450x300.jpg'
import SifupThumbnail from '@/public/thumb-sifup-3-450x300.jpg'
import QuillotaThumbnail from '@/public/thumb-sanluissa-2-450x300.jpg'

// Logos
import JardinLogo from '@/public/logo-eljardindeamanda-1.png'
import RadioLogo from '@/public/logo-radiovalparaiso.png'
import EpicentroLogo from '@/public/logo-elepicentro.png'
import ParticipaLogo from '@/public/logo-vinaparticipa.png'
import ResonanciaLogo from '@/public/logo-resonanciavalparaiso.png'
import TitularLogo from '@/public/logo-titular.png'
import SifupLogo from '@/public/logo-sifup.png'
import QuillotaLogo from '@/public/logo-sanluis-1.png'

export const OURWORK: OurWork[] = [
    {
        id: 'jardinamanda',
        title: 'El Jardín de Amanda',
        description: 'Online Store · Flores y Regalos',
        url: '/portafolio/el-jardin-de-amanda',
        image: {
            thumbnail: JardinThumbnail,
            width: 450,
            height: 300
        },
        logo: {
            icon: JardinLogo,
            width: 50,
            height: 30
        }
    },
    {
        id: 'radiovalpo',
        title: 'Radio Valparaíso',
        description: 'Diseño y Desarrollo web multidispositivo',
        url: '/portafolio/radio-valparaiso',
        image: {
            thumbnail: RadioThumbnail,
            width: 450,
            height: 300
        },
        logo: {
            icon: RadioLogo,
            width: 50,
            height: 30
        }
    },
    {
        id: 'epicentro',
        title: 'El Epicentro',
        description: 'Diseño y desarrolo de plataforma web para diario online',
        url: '/portafolio/el-epicentro',
        image: {
            thumbnail: EpicentroThumbnail,
            width: 450,
            height: 300
        },
        logo: {
            icon: EpicentroLogo,
            width: 50,
            height: 30
        }
    },
    {
        id: 'vinaparticipa',
        title: 'Viña Participa',
        description: 'Diseño y Desarrollo web multidispositivo',
        url: '/portafolio/vina-participa',
        image: {
            thumbnail: ParticipaThumbnail,
            width: 450,
            height: 300
        },
        logo: {
            icon: ParticipaLogo,
            width: 50,
            height: 30
        }
    },
    {
        id: 'resonancia',
        title: 'Resonancia Valparaíso',
        description: 'Diseño y Desarrolo Web multidispositivo',
        url: '/portafolio/resonancia-valparaiso',
        image: {
            thumbnail: ResonanciaThumbnail,
            width: 450,
            height: 300
        },
        logo: {
            icon: ResonanciaLogo,
            width: 50,
            height: 30
        }
    },
    {
        id: 'titular',
        title: 'Titular',
        description: 'Diseño y Desarrolo Web multidispositivo',
        url: '/portafolio/titular',
        image: {
            thumbnail: TitularThumbnail,
            width: 450,
            height: 300
        },
        logo: {
            icon: TitularLogo,
            width: 50,
            height: 30
        }
    },
    {
        id: 'sifup',
        title: 'Sifup',
        description: 'Diseño y Desarrolo Web multidispositivo',
        url: '/portafolio/sifup',
        image: {
            thumbnail: SifupThumbnail,
            width: 450,
            height: 300
        },
        logo: {
            icon: SifupLogo,
            width: 50,
            height: 30
        }
    },
    {
        id: 'quillota',
        title: 'San Luis de Quillota',
        description: 'Diseño y Desarrolo Web',
        url: '/portafolio/san-luis-de-quillota',
        image: {
            thumbnail: QuillotaThumbnail,
            width: 450,
            height: 300
        },
        logo: {
            icon: QuillotaLogo,
            width: 30,
            height: 30
        }
    }
]

