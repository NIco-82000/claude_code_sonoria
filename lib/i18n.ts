export const navigation = {
  main: [
    { name: 'Fonctionnalités', href: '/features' },
    { name: 'Tarifs', href: '/pricing' },
    { name: 'Intégrations', href: '/integrations' },
    { name: 'Comment ça marche', href: '/how-it-works' },
    { name: 'Témoignages', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ],
  cta: [
    { name: 'Demander une démo', href: '/contact', primary: true },
  ],
  footer: {
    product: [
      { name: 'Fonctionnalités', href: '/features' },
      { name: 'Tarifs', href: '/pricing' },
      { name: 'Intégrations', href: '/integrations' },
      { name: 'Démo Dashboard', href: '/dashboard-demo' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Comment ça marche', href: '/how-it-works' },
      { name: 'Témoignages', href: '/testimonials' },
    ],
    legal: [
      { name: 'Confidentialité', href: '/legal/privacy' },
      { name: 'Conditions', href: '/legal/terms' },
      { name: 'RGPD', href: '/legal/rgpd' },
    ],
    social: [
      { name: 'LinkedIn', href: 'https://linkedin.com/company/sonoya-ai', icon: 'Linkedin' },
      { name: 'Twitter', href: 'https://twitter.com/sonoyaai', icon: 'Twitter' },
      { name: 'YouTube', href: 'https://youtube.com/@sonoyaai', icon: 'Youtube' },
    ],
  },
}

export const content = {
  hero: {
    title: 'La voix qui comprend, répond et agit.',
    subtitle: 'Des assistants vocaux IA qui gèrent vos appels, qualifient vos leads et pilotent vos appareils — en quelques jours, pas en mois.',
    bullets: [
      '<150 ms de latence',
      'Multilingue 30+ langues',
      'Sécurité & RGPD',
    ],
    cta: {
      primary: 'Demander une démo',
      secondary: 'Voir nos intégrations',
    },
  },
  kpis: [
    { label: 'Appels traités', value: '100%', unit: '', trend: 'up' },
    { label: 'Réservations', value: '+9%', unit: '', trend: 'up' },
    { label: 'Temps libéré', value: '3', unit: 'h/jour', trend: 'neutral' },
  ],
}
