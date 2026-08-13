# Naranja Web

Sitio corporativo de **Naranja Web**, una agencia de marketing digital enfocada en diseño y desarrollo web, gestión de redes sociales, posicionamiento SEO y email marketing.

La aplicación está construida con el App Router de Next.js, componentes tipados con TypeScript y una interfaz responsive basada en Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.10-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11.21.0-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![ESLint](https://img.shields.io/badge/ESLint-9.39.5-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-0AE448?style=for-the-badge&logo=greensock&logoColor=050505)](https://gsap.com/)

## Contenido

- [Vista previa](#vista-previa)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Comandos disponibles](#comandos-disponibles)
- [Rutas](#rutas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Arquitectura y convenciones](#arquitectura-y-convenciones)
- [Personalización del contenido](#personalización-del-contenido)
- [Variables de entorno](#variables-de-entorno)
- [Compilación y despliegue](#compilación-y-despliegue)
- [Estado actual](#estado-actual)

## Vista previa

[![Página de inicio de Naranja Web](./public/screenshot-naranja-web.jpg)](./public/screenshot-naranja-web.jpg)

## Características

- Página de inicio responsive con portada, servicios, trabajos, clientes y contacto.
- Menú lateral adaptable, indicador de ruta activa y cierre mediante `Escape` o clic exterior.
- Catálogos de servicios y proyectos generados desde archivos de constantes tipadas.
- Carruseles continuos de logotipos con pausa al pasar el cursor.
- Imágenes y tipografía Poppins optimizadas con `next/image` y `next/font`.
- Metadatos SEO base configurados mediante la API `Metadata` de Next.js.
- Componentes reutilizables y alias de importación `@/*`.
- Estilos responsive, animaciones y variables de color centralizadas.

## Tecnologías

| Tecnología | Uso en el proyecto |
| --- | --- |
| [Next.js](https://nextjs.org/) | Framework, App Router, layouts, navegación, metadatos y optimización de recursos. |
| [React](https://react.dev/) | Componentes, estado y efectos de la interfaz. |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estricto de componentes, contenido y configuración. |
| [Tailwind CSS](https://tailwindcss.com/) | Sistema de estilos, diseño responsive y tema visual. |
| [tailwind-animations](https://www.npmjs.com/package/tailwind-animations) | Utilidades declarativas de animación. |
| [React Fast Marquee](https://www.react-fast-marquee.com/) | Carruseles de logotipos de clientes. |
| [React Icons](https://react-icons.github.io/react-icons/) | Iconografía de navegación, contacto y redes sociales. |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Composición segura de clases mediante la utilidad `cn`. |
| [GSAP](https://gsap.com/) | Dependencia disponible para animaciones avanzadas; todavía no se importa en los componentes actuales. |
| [ESLint](https://eslint.org/) | Análisis estático con las reglas de Next.js, Core Web Vitals y TypeScript. |
| [pnpm](https://pnpm.io/) | Instalación de dependencias y ejecución de scripts. |

## Requisitos

- [Node.js](https://nodejs.org/) **20.9.0 o superior**, requisito de Next.js 16.
- [pnpm](https://pnpm.io/installation) **11.21.0**, versión declarada en `package.json`.
- Git, si se obtiene el proyecto desde el repositorio remoto.

Comprueba las versiones instaladas con:

```bash
node --version
pnpm --version
```

## Instalación y ejecución

Desde la raíz del proyecto:

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador. El servidor de desarrollo recarga la aplicación al guardar cambios.

Si pnpm no está disponible y tu instalación de Node incluye Corepack:

```bash
corepack enable
corepack install
pnpm install
```

El archivo `pnpm-lock.yaml` debe conservarse y actualizarse junto con cualquier cambio de dependencias para garantizar instalaciones reproducibles.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor local de Next.js en modo desarrollo. |
| `pnpm build` | Genera y valida la compilación optimizada para producción. |
| `pnpm start` | Ejecuta la compilación de producción; requiere haber ejecutado `pnpm build`. |
| `pnpm lint` | Analiza el código con ESLint. |

El proyecto aún no define un comando de pruebas automatizadas.

## Rutas

El grupo `(root)` organiza las páginas que comparten el encabezado y el pie de página. Los paréntesis son una convención del App Router y **no forman parte de la URL**.

| URL | Archivo | Estado |
| --- | --- | --- |
| `/` | `app/(root)/page.tsx` | Inicio implementado. |
| `/nosotros` | `app/(root)/nosotros/page.tsx` | Contenido principal implementado; bloque de contacto pendiente. |
| `/sitios-web` | `app/(root)/sitios-web/page.tsx` | Vista provisional. |
| `/gestion` | `app/(root)/gestion/page.tsx` | Vista provisional. |
| `/posicionamiento` | `app/(root)/posicionamiento/page.tsx` | Vista provisional. |
| `/marketing` | `app/(root)/marketing/page.tsx` | Vista provisional. |
| `/email` | `app/(root)/email/page.tsx` | Vista provisional, no enlazada desde el menú principal. |
| `/contacto` | `app/(root)/contacto/page.tsx` | Vista provisional. |

## Estructura del proyecto

```text
naranja-web/
├── app/
│   ├── (root)/                 # Grupo de rutas con Header y Footer
│   │   ├── page.tsx            # Página de inicio
│   │   ├── layout.tsx          # Layout compartido del sitio
│   │   ├── nosotros/           # Página corporativa
│   │   ├── sitios-web/         # Servicio de desarrollo web
│   │   ├── gestion/            # Servicio de redes sociales
│   │   ├── posicionamiento/    # Servicio SEO
│   │   ├── marketing/          # Servicio de email marketing
│   │   ├── email/              # Ruta adicional en desarrollo
│   │   └── contacto/           # Página de contacto
│   ├── globals.css             # Tailwind, tema y utilidades globales
│   └── layout.tsx              # Layout raíz, fuente y metadatos
├── components/
│   ├── homepage/               # Secciones específicas del inicio
│   ├── shared/                 # Navegación y componentes reutilizables
│   └── index.ts                # Exportaciones públicas de componentes
├── consts/                     # Textos, navegación, servicios y proyectos
├── lib/                        # Utilidades compartidas
├── public/                     # Imágenes, logotipos e iconos estáticos
├── types/                      # Tipos de dominio de servicios y trabajos
├── eslint.config.mjs           # Reglas de calidad de código
├── next.config.ts              # Configuración de Next.js
├── postcss.config.mjs          # Integración de Tailwind con PostCSS
├── tsconfig.json               # TypeScript y alias @/*
├── pnpm-workspace.yaml         # Configuración del workspace
└── package.json                # Dependencias y scripts
```

## Arquitectura y convenciones

### App Router y layouts

`app/layout.tsx` define el idioma español, carga Poppins y publica los metadatos generales. `app/(root)/layout.tsx` envuelve las páginas visibles con `Header`, `main` y `Footer`.

Los componentes son Server Components por defecto. Solo los elementos con interacción o APIs del navegador —por ejemplo `Header`, `Navbar`, `Footer` y `Marquee`— declaran `"use client"`.

### Contenido separado de la presentación

La interfaz obtiene gran parte de sus datos desde `consts/`. Este enfoque permite cambiar textos, enlaces, servicios y trabajos sin modificar la estructura JSX de cada sección. Los contratos de esos datos están en `types/`.

### Estilos

Tailwind CSS 4 se importa directamente desde `app/globals.css`. En ese archivo también se encuentran:

- Los colores de marca como `primary`, `secondary`, `background` y `calipso`.
- La utilidad personalizada `container`.
- Estilos del encabezado y de ocultación de scrollbar.
- Animaciones y ajustes globales de tipografía.

Para combinar clases condicionales usa `cn()` desde `lib/utils.ts`, que integra `clsx` y `tailwind-merge`.

### Recursos estáticos

Los recursos visuales viven en `public/`. Cuando una imagen se conoce en tiempo de compilación, se importa de forma estática y se renderiza con `next/image`. Al añadir una nueva imagen, usa un nombre descriptivo, completa el texto alternativo y declara `sizes` cuando la imagen sea responsive.

## Personalización del contenido

| Necesidad | Archivo principal |
| --- | --- |
| Título, descripción SEO y textos del inicio | `consts/homepage.ts` |
| Opciones del menú y redes sociales | `consts/navigation.ts` |
| Servicios ofrecidos | `consts/services.ts` |
| Proyectos mostrados en el portafolio | `consts/ourwork.ts` |
| Colores, tipografía y utilidades globales | `app/globals.css` |
| Logotipos del carrusel | `components/shared/Marquee.tsx` |
| Imágenes, logos e iconos | `public/` |

Al agregar un servicio o trabajo, conserva la forma definida en `types/services.ts` o `types/ourwork.ts`. TypeScript avisará durante el desarrollo y la compilación si falta una propiedad requerida.

## Variables de entorno

El código actual no consulta variables de entorno, por lo que no se necesita un archivo `.env` para iniciar la aplicación.

Los archivos `.env*` están ignorados por Git. Si posteriormente se integra un formulario, CMS, servicio de analítica o API externa:

1. Documenta únicamente los nombres de las variables en un `.env.example` sin valores reales.
2. Guarda los secretos locales en `.env.local`.
3. Usa el prefijo `NEXT_PUBLIC_` solo para valores que puedan exponerse en el navegador.
4. Configura los valores de producción directamente en la plataforma de despliegue.

## Compilación y despliegue

Antes de publicar cambios, ejecuta:

```bash
pnpm lint
pnpm build
```

Para comprobar localmente la salida de producción:

```bash
pnpm start
```

La aplicación puede desplegarse en [Vercel](https://vercel.com/), que detecta Next.js y pnpm automáticamente, o en cualquier plataforma compatible con Node.js. En una configuración manual se deben ejecutar `pnpm install`, `pnpm build` y finalmente `pnpm start`.

## Estado actual

Este repositorio se encuentra en desarrollo. Antes de considerarlo listo para producción hay que tener en cuenta que:

- La portada y el contenido principal de `/nosotros` están desarrollados; las demás páginas de servicio y contacto son vistas provisionales.
- El formulario visible en la portada todavía no posee acción de envío, validación, estado de carga ni integración con un backend.
- Los proyectos definidos en `consts/ourwork.ts` enlazan a rutas `/portafolio/...` que aún no existen en `app/`.
- `PageContact` es actualmente una sección vacía reservada para contenido futuro.
- No existe una suite de pruebas automatizadas.
- GSAP y `@gsap/react` están instalados, pero todavía no se utilizan en los componentes.

## Flujo recomendado de cambios

1. Crea una rama descriptiva para el cambio.
2. Mantén el contenido reutilizable en `consts/` y los tipos compartidos en `types/`.
3. Comprueba el comportamiento en tamaños móvil y escritorio.
4. Ejecuta `pnpm lint` y `pnpm build`.
5. Revisa que los enlaces, textos alternativos y estados de interacción sean accesibles.

## Licencia

El paquete está marcado como privado (`"private": true`) y el repositorio no incluye actualmente una licencia pública.
