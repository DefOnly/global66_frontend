export const CURRENCY_MAP = {
  'peso-chileno': {
    code: 'CLP',
    name: 'Peso Chileno',
    symbol: '$',
    locale: 'es-CL',
    flag: 'chile',
    hreflang: 'es-CL',
    country: 'Chile'
  },
  'sol-peruano': {
    code: 'PEN',
    name: 'Sol Peruano',
    symbol: 'S/',
    locale: 'es-PE',
    flag: 'peru',
    hreflang: 'es-PE',
    country: 'Perú'
  },
  'dolares': {
    code: 'USD',
    name: 'Dólar Estadounidense',
    symbol: '$',
    locale: 'en-US',
    flag: 'usa',
    hreflang: 'en',
    country: 'Estados Unidos'
  }
}

export const getCurrencyBySlug = (slug) => CURRENCY_MAP[slug] || null

export const getSlugByCurrency = (code) => {
  return Object.keys(CURRENCY_MAP).find(
    slug => CURRENCY_MAP[slug].code === code
  )
}

export const getAllSlugs = () => Object.keys(CURRENCY_MAP)
