import { DefaultSeoProps } from 'next-seo'

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Sonoya AI',
  defaultTitle: 'Sonoya AI - Assistants Vocaux IA de Nouvelle Génération',
  description: 'Des assistants vocaux IA qui gèrent vos appels, qualifient vos leads et pilotent vos appareils. Latence <150ms, 30+ langues, 100% RGPD.',
  canonical: 'https://sonoya.ai',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://sonoya.ai',
    siteName: 'Sonoya AI',
    title: 'Sonoya AI - Assistants Vocaux IA',
    description: 'La voix qui comprend, répond et agit. Des assistants vocaux IA premium pour votre entreprise.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Sonoya AI',
      },
    ],
  },
  twitter: {
    handle: '@sonoyaai',
    site: '@sonoyaai',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#0B0F14',
    },
  ],
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sonoya AI',
  url: 'https://sonoya.ai',
  logo: 'https://sonoya.ai/logo.svg',
  description: 'Assistants vocaux IA de nouvelle génération',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    email: 'contact@sonoya.ai',
    availableLanguage: ['French', 'English'],
  },
  sameAs: [
    'https://linkedin.com/company/sonoya-ai',
    'https://twitter.com/sonoyaai',
    'https://youtube.com/@sonoyaai',
  ],
}

export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Sonoya AI Voice Assistant',
  description: 'Assistant vocal IA pour automatiser vos appels et interactions vocales',
  brand: {
    '@type': 'Brand',
    name: 'Sonoya AI',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
}
