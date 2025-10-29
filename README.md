# Sonoya AI - Site Vitrine Premium

Site vitrine premium pour **Sonoya AI**, plateforme d'assistants vocaux IA de nouvelle génération.

## 🚀 Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + Design System custom
- **UI Components**: shadcn/ui + composants personnalisés
- **Animations**: Framer Motion
- **Forms**: react-hook-form + Zod
- **SEO**: next-seo + JSON-LD
- **Tests**: Jest + React Testing Library

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/votre-org/sonoya-ai.git
cd sonoya-ai

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🛠 Scripts Disponibles

```bash
npm run dev         # Démarrer le serveur de développement
npm run build       # Build de production
npm run start       # Démarrer le serveur de production
npm run lint        # Linter le code
npm run test        # Lancer les tests en mode watch
npm run test:ci     # Lancer les tests en mode CI
npm run format      # Formatter le code avec Prettier
```

## 📁 Structure du Projet

```
sonoya-ai/
├── app/                          # Pages Next.js (App Router)
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Page d'accueil
│   ├── features/page.tsx         # Fonctionnalités
│   ├── pricing/page.tsx          # Tarifs
│   ├── integrations/page.tsx     # Intégrations
│   ├── how-it-works/page.tsx     # Comment ça marche
│   ├── testimonials/page.tsx     # Témoignages
│   ├── blog/page.tsx             # Blog
│   ├── faq/page.tsx              # FAQ
│   ├── contact/page.tsx          # Contact
│   ├── dashboard-demo/page.tsx   # Dashboard démo
│   └── legal/                    # Pages légales
│       ├── privacy/page.tsx      # Confidentialité
│       ├── terms/page.tsx        # CGU
│       └── rgpd/page.tsx         # RGPD
├── components/                   # Composants React
│   ├── ui/                       # Composants shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── badge.tsx
│   │   ├── tabs.tsx
│   │   └── accordion.tsx
│   ├── VoiceWave.tsx             # Animation onde vocale
│   ├── GradientButton.tsx        # Bouton avec dégradé
│   ├── KpiStat.tsx               # Carte KPI
│   ├── ProblemCard.tsx           # Carte problème
│   ├── SolutionCard.tsx          # Carte solution
│   ├── AnalyticsPanel.tsx        # Panneau analytics
│   ├── MarketProof.tsx           # Preuves marché
│   ├── HowItWorks.tsx            # Étapes
│   ├── PricingTable.tsx          # Tableau tarifs
│   ├── FAQItem.tsx               # Item FAQ
│   ├── TestimonialCard.tsx       # Carte témoignage
│   ├── IntegrationLogo.tsx       # Logo intégration
│   ├── ContactForm.tsx           # Formulaire contact
│   ├── Header.tsx                # En-tête
│   ├── Footer.tsx                # Pied de page
│   └── Section.tsx               # Section wrapper
├── lib/                          # Utilitaires
│   ├── utils.ts                  # Helpers généraux
│   ├── analytics.ts              # Tracking analytics
│   ├── seo.ts                    # Configuration SEO
│   └── i18n.ts                   # Contenu français
├── styles/
│   └── globals.css               # Styles globaux + tokens
├── __tests__/                    # Tests
│   ├── PricingTable.test.tsx
│   ├── VoiceWave.test.tsx
│   └── ContactForm.test.tsx
├── public/                       # Assets statiques
│   ├── favicon.ico
│   ├── logo.svg
│   └── og.png
└── README.md                     # Documentation
```

## 🎨 Design System

### Palette de Couleurs

```css
--brand-primary: #6D5BF6        /* Indigo Sonoya */
--brand-accent: #22D3EE         /* Cyan Sonoya */
--surface-0: #0B0F14            /* Fond principal */
--surface-1: rgba(255,255,255,0.06) /* Surface élevée */
--text-primary: #E6ECF2         /* Texte principal */
--text-secondary: #A9B4C2       /* Texte secondaire */
--border: #202632               /* Bordures */
--success: #10B981
--warning: #F59E0B
--danger: #EF4444
```

### Typographie

- **Police principale**: Inter (Google Fonts)
- **Titres**: Inter 800/700, tracking −0.02em
- **Corps**: Inter 400/500

### Grille & Spacing

- **Container max-width**: 1240px
- **Gutters**: 24px
- **Échelle 8pt**: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128

### Classes Utilitaires

```css
.glass              /* Glassmorphism avec blur */
.hairline           /* Bordure 1px */
.glow:hover         /* Effet glow au hover */
.gradient-text      /* Texte avec dégradé */
.container-custom   /* Container responsive */
.btn-gradient       /* Bouton avec dégradé */
```

## 🧩 Composants Clés

### VoiceWave

Animation d'onde vocale interactive avec Canvas.

```tsx
<VoiceWave
  intensity={0.6}
  color="var(--brand-accent)"
  interactive
/>
```

### GradientButton

Bouton avec tracking analytics intégré.

```tsx
<GradientButton
  variant="gradient"
  size="xl"
  trackingLabel="cta-demo"
  asChild
>
  <Link href="/contact">Demander une démo</Link>
</GradientButton>
```

### PricingTable

Tableau de tarifs responsive.

```tsx
<PricingTable plans={[
  {
    name: 'Pro',
    price: '599€',
    period: '/ mois',
    popular: true,
    features: [...],
    cta: 'Essayer',
    ctaLink: '/contact'
  }
]} />
```

### ContactForm

Formulaire multi-étapes avec validation Zod.

```tsx
<ContactForm />
```

## 🔍 SEO & Analytics

### Configuration SEO

Le SEO est configuré via `lib/seo.ts` avec:
- Metadata Next.js 14
- Open Graph tags
- Twitter Card
- JSON-LD (Organization, Product, FAQ)

### Analytics

Tracking des événements:
- Clics CTA (`trackEvent('cta_click')`)
- Profondeur de scroll (`trackScroll()`)
- Soumission formulaires

Intégration GA4 prête (configurer `gtag` dans `lib/analytics.ts`).

## 🧪 Tests

```bash
# Lancer les tests en mode watch
npm run test

# Lancer les tests une fois (CI)
npm run test:ci

# Générer le coverage
npm run test -- --coverage
```

Tests disponibles:
- `PricingTable.test.tsx`: Tests de rendu des plans
- `VoiceWave.test.tsx`: Tests du composant Canvas
- `ContactForm.test.tsx`: Tests du formulaire

## 🚢 Déploiement

### Vercel (recommandé)

1. Pusher le code sur GitHub
2. Importer le projet dans Vercel
3. Configurer les variables d'environnement (si nécessaire)
4. Déployer

```bash
# Ou via CLI Vercel
vercel --prod
```

### Autres plateformes

Le projet est compatible avec:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Docker (via `next build && next start`)

## 🔧 Personnalisation

### Modifier les couleurs

Éditer `tailwind.config.ts` et `styles/globals.css`:

```css
:root {
  --brand-primary: #YOUR_COLOR;
  --brand-accent: #YOUR_COLOR;
}
```

### Ajouter du contenu

Le contenu français est centralisé dans `lib/i18n.ts`:

```ts
export const content = {
  hero: {
    title: 'Votre titre',
    subtitle: 'Votre sous-titre',
    ...
  }
}
```

### Ajouter une page

1. Créer `app/ma-page/page.tsx`
2. Utiliser le composant `<Section>` pour la structure
3. Ajouter le lien dans `lib/i18n.ts` (navigation)

### Modifier le logo

Remplacer `public/logo.svg` par votre logo (format SVG recommandé).

## 📝 Conventions de Code

- **TypeScript strict**: Tous les types doivent être explicites
- **Composants fonctionnels**: Pas de class components
- **Hooks**: Préfixer par `use` (ex: `useAnalytics`)
- **Nommage**:
  - Composants: PascalCase
  - Fichiers: kebab-case ou PascalCase (composants)
  - Variables: camelCase
- **Import order**:
  1. React/Next
  2. Librairies externes
  3. Composants internes
  4. Utils/Lib
  5. Types
  6. Styles

## 🐛 Debugging

### Mode développement

```bash
NODE_ENV=development npm run dev
```

### Logs

Les événements analytics sont loggés en console (mode dev):

```ts
trackEvent('cta_click', { label: 'hero-demo' })
// [Analytics] cta_click { label: 'hero-demo' }
```

### TypeScript

Vérifier les erreurs TypeScript:

```bash
npx tsc --noEmit
```

## 📄 Licence

Propriétaire - Tous droits réservés © 2024 Sonoya AI

## 🤝 Support

Pour toute question ou assistance:
- **Email**: dev@sonoya.ai
- **Documentation**: [docs.sonoya.ai](https://docs.sonoya.ai)
- **GitHub Issues**: [github.com/sonoya-ai/website/issues](https://github.com/sonoya-ai/website/issues)

---

Développé avec ❤️ par l'équipe Sonoya AI
