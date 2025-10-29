'use client'

import { Section } from '@/components/Section'
import { IntegrationLogo } from '@/components/IntegrationLogo'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GradientButton } from '@/components/GradientButton'
import {
  Plug,
  Zap,
  Database,
  MessageSquare,
  ShoppingCart,
  Calendar,
  Users,
  FileText,
  Webhook,
  Code,
} from 'lucide-react'
import Link from 'next/link'

export default function IntegrationsPage() {
  const categories = [
    {
      title: 'CRM & Sales',
      icon: Users,
      integrations: [
        { name: 'Salesforce', description: 'Sync automatique leads et contacts' },
        { name: 'HubSpot', description: 'Enrichissement CRM temps réel' },
        { name: 'Pipedrive', description: 'Mise à jour deals automatique' },
      ],
    },
    {
      title: 'Support Client',
      icon: MessageSquare,
      integrations: [
        { name: 'Zendesk', description: 'Création tickets automatique' },
        { name: 'Intercom', description: 'Handoff agents humains' },
        { name: 'Freshdesk', description: 'Escalade intelligente' },
      ],
    },
    {
      title: 'E-commerce',
      icon: ShoppingCart,
      integrations: [
        { name: 'Shopify', description: 'Commandes vocales' },
        { name: 'WooCommerce', description: 'Suivi commandes' },
        { name: 'Stripe', description: 'Paiements sécurisés' },
      ],
    },
    {
      title: 'Calendrier & Booking',
      icon: Calendar,
      integrations: [
        { name: 'Google Calendar', description: 'Prise RDV automatique' },
        { name: 'Calendly', description: 'Réservation intelligente' },
        { name: 'Microsoft Outlook', description: 'Sync bidirectionnel' },
      ],
    },
    {
      title: 'Communication',
      icon: MessageSquare,
      integrations: [
        { name: 'Twilio', description: 'Téléphonie cloud' },
        { name: 'Slack', description: 'Notifications équipe' },
        { name: 'Microsoft Teams', description: 'Collaboration intégrée' },
      ],
    },
    {
      title: 'Automation',
      icon: Zap,
      integrations: [
        { name: 'Zapier', description: '5000+ apps connectées' },
        { name: 'Make', description: 'Workflows visuels' },
        { name: 'n8n', description: 'Open-source automation' },
      ],
    },
  ]

  const apis = [
    {
      icon: Code,
      title: 'REST API',
      description: 'API REST complète avec authentification OAuth 2.0. Documentation OpenAPI.',
    },
    {
      icon: Webhook,
      title: 'Webhooks',
      description: 'Recevez des événements en temps réel (appel démarré, terminé, intent détecté).',
    },
    {
      icon: Database,
      title: 'GraphQL',
      description: 'Requêtes GraphQL flexibles pour récupérer exactement les données nécessaires.',
    },
    {
      icon: FileText,
      title: 'SDKs',
      description: 'SDKs officiels Node.js, Python, PHP. SDKs communautaires Ruby, Go.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <Plug className="w-3 h-3 mr-2" />
            Intégrations
          </Badge>
          <h1 className="mb-6">Connectez Sonoya AI à votre stack</h1>
          <p className="text-xl text-text-secondary mb-8">
            Intégrations natives avec vos outils préférés. API REST, webhooks, et SDKs pour une
            flexibilité maximale.
          </p>
        </div>
      </Section>

      {/* Categories */}
      {categories.map((category, idx) => (
        <Section key={idx} className={idx % 2 === 1 ? 'bg-surface-1/30' : ''}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-brand-primary/10">
              <category.icon className="w-6 h-6 text-brand-primary" />
            </div>
            <h2 className="text-3xl font-bold">{category.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {category.integrations.map((integration, iIdx) => (
              <Card key={iIdx} className="hover:shadow-glow transition-all cursor-pointer">
                <CardHeader>
                  <div className="h-16 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-text-secondary">
                      {integration.name}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-center">{integration.name}</CardTitle>
                  <CardDescription className="text-center">
                    {integration.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Section>
      ))}

      {/* APIs & SDKs */}
      <Section className="bg-surface-1/30">
        <div className="text-center mb-12">
          <h2 className="mb-4">APIs & SDKs Développeurs</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Construisez des intégrations sur-mesure avec notre API complète.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apis.map((api, idx) => (
            <Card key={idx} className="hover:shadow-glow transition-all">
              <CardHeader>
                <div className="p-3 rounded-full bg-brand-accent/10 w-fit mb-3">
                  <api.icon className="w-6 h-6 text-brand-accent" />
                </div>
                <CardTitle className="text-lg mb-2">{api.title}</CardTitle>
                <CardDescription>{api.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <GradientButton variant="gradient" size="lg" trackingLabel="integrations-docs">
              Accéder à la documentation
            </GradientButton>
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="glass p-12 md:p-16 text-center rounded-2xl">
          <h2 className="mb-4">Besoin d'une intégration personnalisée ?</h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Notre équipe peut développer des connecteurs sur-mesure pour vos outils internes.
          </p>
          <Link href="/contact">
            <GradientButton variant="gradient" size="xl" trackingLabel="integrations-custom">
              Parler à un expert
            </GradientButton>
          </Link>
        </div>
      </Section>
    </>
  )
}
