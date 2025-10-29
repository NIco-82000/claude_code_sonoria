'use client'

import { Section } from '@/components/Section'
import { FAQItem, FAQ } from '@/components/FAQItem'
import { Badge } from '@/components/ui/badge'
import { GradientButton } from '@/components/GradientButton'
import { HelpCircle } from 'lucide-react'
import Link from 'next/link'

export default function FAQPage() {
  const faqs: FAQ[] = [
    {
      question: 'Comment Sonoya AI garantit-il la sécurité et la confidentialité de mes données ?',
      answer:
        'Toutes les transcriptions sont chiffrées avec AES-256 end-to-end. Nous hébergeons vos données en France/EU, conformément au RGPD. Nous sommes certifiés ISO 27001 et SOC 2 Type II. Vous gardez la pleine propriété de vos données et pouvez les exporter ou les supprimer à tout moment (droit à l\'oubli).',
    },
    {
      question: 'Quelles langues sont supportées par Sonoya AI ?',
      answer:
        'Nous supportons plus de 30 langues dont français, anglais, espagnol, allemand, italien, portugais, néerlandais, polonais, russe, arabe, mandarin, japonais, coréen. La détection de langue est automatique et l\'assistant peut basculer entre langues en cours d\'appel si nécessaire.',
    },
    {
      question: 'Combien de temps faut-il pour déployer un assistant vocal ?',
      answer:
        'Pour un cas d\'usage simple (prise RDV, FAQ), comptez 3-5 jours (intégration + configuration + tests). Pour des scénarios complexes avec fine-tuning ASR et orchestration multi-étapes, prévoyez 2-4 semaines. Nous proposons un onboarding dédié sur les plans Pro et Entreprise.',
    },
    {
      question: 'Puis-je intégrer Sonoya AI avec mon CRM / ERP / outils internes ?',
      answer:
        'Oui. Nous proposons des intégrations natives avec les principaux CRM (Salesforce, HubSpot, Pipedrive), outils de support (Zendesk, Intercom) et calendriers (Google, Outlook). Pour vos outils internes, notre API REST, webhooks et SDKs vous permettent de construire des intégrations sur-mesure. Zapier et Make sont également supportés.',
    },
    {
      question: 'Proposez-vous du SSO / SAML pour les connexions entreprise ?',
      answer:
        'Oui, SSO (Single Sign-On) via SAML 2.0 et OAuth 2.0 est disponible sur le plan Entreprise. Nous supportons les fournisseurs d\'identité classiques : Okta, Azure AD, Google Workspace, Auth0, etc.',
    },
    {
      question: 'Quels sont vos SLA (Service Level Agreements) ?',
      answer:
        'Plan Essentiel : pas de SLA formel, uptime cible 99%. Plan Pro : SLA 99,5% avec crédits en cas de downtime. Plan Entreprise : SLA 99,9% avec support 24/7 et infra dédiée optionnelle. Consultez notre page Statut en temps réel : status.sonoya.ai',
    },
    {
      question: 'Quelle est la qualité de la synthèse vocale (TTS) ?',
      answer:
        'Nous utilisons des modèles TTS neuronaux (Eleven Labs, Azure Neural TTS) pour un rendu ultra-réaliste. Vous pouvez choisir parmi 20+ voix premium, ajuster le débit et l\'intonation, et même cloner une voix de marque (option payante, plan Entreprise). Support SSML complet pour un contrôle fin de la prononciation.',
    },
    {
      question: 'Comment fonctionne l\'analytics et le reporting ?',
      answer:
        'Vous disposez d\'un dashboard temps réel avec métriques clés : volume d\'appels, durée moyenne, taux de résolution, NPS vocal, sentiment analysis, top intents. Export CSV/JSON des transcriptions. Sur le plan Pro+, vous avez accès aux parcours utilisateurs détaillés et à l\'A/B testing de prompts.',
    },
    {
      question: 'Puis-je personnaliser la voix et la personnalité de l\'assistant ?',
      answer:
        'Absolument. Vous sélectionnez la voix (20+ options), ajustez le ton (formel, décontracté, empathique), configurez le prompt système pour définir la personnalité. Sur le plan Entreprise, nous proposons le clonage de voix (one-time fee) pour une voix de marque unique.',
    },
    {
      question: 'Quel est votre modèle de support client ?',
      answer:
        'Plan Essentiel : support email avec réponse sous 48h ouvrées. Plan Pro : support prioritaire (email + chat) sous 24h + accès documentation avancée. Plan Entreprise : support 24/7 (email, chat, téléphone) avec Slack dédié et Success Manager assigné.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <HelpCircle className="w-3 h-3 mr-2" />
            FAQ
          </Badge>
          <h1 className="mb-6">Questions fréquentes</h1>
          <p className="text-xl text-text-secondary mb-8">
            Tout ce que vous devez savoir sur Sonoya AI. Une question ? Contactez-nous.
          </p>
        </div>
      </Section>

      {/* FAQ List */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <FAQItem faqs={faqs} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-surface-1/30">
        <div className="glass p-12 text-center rounded-2xl max-w-3xl mx-auto">
          <h2 className="mb-4">Vous ne trouvez pas votre réponse ?</h2>
          <p className="text-xl text-text-secondary mb-8">
            Notre équipe est là pour vous aider. Posez-nous vos questions.
          </p>
          <Link href="/contact">
            <GradientButton variant="gradient" size="xl" trackingLabel="faq-contact">
              Nous contacter
            </GradientButton>
          </Link>
        </div>
      </Section>
    </>
  )
}
