import qs from 'qs'

export const STRAPI_BASE_URL = process.env.STRAPI_BASE_URL || 'http://localhost:1337'

export const QUERY_HOME_PAGE = {
    populate: {
        sections: {
            on: {
                'layout.hero-section': {
                    populate: {
                        image: {
                            fields: ['url', 'alternativeText'],
                        },
                        link: '*',
                    },
                },
                'layout.services': {
                    populate: {
                        servicesCard: {
                            populate: {
                                serviceIcon: {
                                    fields: ['url', 'alternativeText'],
                                },
                            },
                        },
                        servicesTitle: true,
                    },
                },
                'layout.our-work': {
                    populate: {
                        workCard: {
                            fields: ['titleCard', 'descriptionCard'],
                            populate: {
                                imageCard: {
                                    fields: ['url', 'alternativeText'],
                                },
                                iconCard: {
                                    fields: ['url', 'alternativeText'],
                                },
                            },
                        },
                        ourWorkTitle: true,
                    },
                },
                'layout.clientes': {
                    populate: {
                        clientesUp: {
                            populate: {
                                cliente: {
                                    fields: ['url', 'alternativeText'],
                                },
                            },
                        },
                        clientesDown: {
                            populate: {
                                cliente: {
                                    fields: ['url', 'alternativeText'],
                                },
                            },
                        },
                        clientesTitle: true,
                    }
                }
            },
        },
    },
}

export async function getHomePage() {
    'use cache'
    const query = qs.stringify(QUERY_HOME_PAGE, { encode: false, arrayFormat: 'comma' })
    const response = await getStrapiData(`/api/home-page?${query}`)
    return response?.data
}

export async function getStrapiData(url: string, init?: RequestInit) {
    const fullUrl = `${STRAPI_BASE_URL}${url}`
    try {
        const response = await fetch(fullUrl, init ?? { cache: 'force-cache' })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} for ${fullUrl}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data from Strapi:', error)
        return null
    }
}