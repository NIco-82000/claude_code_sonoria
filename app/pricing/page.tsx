'use client'

import { Section } from '@/components/Section'
import { PricingTable, PricingPlan } from '@/components/PricingTable'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Check, HelpCircle } from 'lucide-react'

export default function PricingPage() {
  const plans: PricingPlan[] = [
    {
      name: 'Essentiel',
      description: 'Pour démarrer avec les assistants vocaux IA',
      price: '199€',
      period: '/ mois',
      features: [
        '1 000 minutes d\'appel incluses',
        'ASR & TTS 30+ langues',
        'Dashboard analytics',
        'API & Webhooks',
        'Intégrations standard',
        'Support email (48h)',
        'Transcriptions illimitées',
        'Hébergement EU',
      ],
      cta: 'Démarrer',
      ctaLink: '/contact',
    },
    {
      name: 'Pro',
      description: 'Pour scaler vos opérations vocales',
      price: '599€',
      period: '/ mois',
      popular: true,
      features: [
        '5 000 minutes incluses',
        'Toutes les fonctionnalités Essentiel',
        'Fine-tuning ASR',
        'Personnalisation TTS',
        'A/B testing prompts',
        'SLA 99,5% uptime',
        'Support prioritaire (24h)',
        'Analytics avancés',
        'Multi-environnements (dev/prod)',
        'Intégrations premium',
      ],
      cta: 'Démarrer l\'essai',
      ctaLink: '/contact',
    },
    {
      name: 'Entreprise',
      description: 'Pour les besoins critiques et personnalisés',
      price: 'Sur devis',
      period: '',
      features: [
        'Volume sur-mesure',
        'Toutes les fonctionnalités Pro',
        'SSO / SAML',
        'Hébergement dédié',
        'Clonage de voix custom',
        'DPA & BAA signés',
        'Support 24/7',
        'SLA 99,9% uptime',
        'Onboarding dédié',
        'Success Manager',
        'Conformité réglementaire avancée',
      ],
      cta: 'Nous contacter',
      ctaLink: '/contact',
    },
  ]

  const faqs = [
    {
      q: 'Que se passe-t-il si je dépasse mon quota de minutes ?',
      a: 'Facturation à l\'usage au-delà du forfait : 0,20€/min (Essentiel), 0,15€/min (Pro), tarif négocié (Entreprise).',
    },
    {
      q: 'Puis-je changer de plan en cours de mois ?',
      a: 'Oui, upgrade immédiat avec prorata. Downgrade pris en compte au prochain cycle.',
    },
    {
      q: 'Les intégrations sont-elles incluses ?',
      a: 'Intégrations standard (REST, Webhooks, Zapier) incluses. Connecteurs premium (Salesforce, HubSpot) en Pro+.',
    },
    {
      q: 'Proposez-vous un essai gratuit ?',
      a: 'Oui, 14 jours d\'essai sur le plan Pro (200 minutes), sans CB. Démo personnalisée sur demande.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">
            Tarifs Transparents
          </Badge>
          <h1 className="mb-6">Des tarifs simples qui évoluent avec vous</h1>
          <p className="text-xl text-text-secondary mb-8">
            Pas de frais cachés. Pas d'engagement long terme. Annulation en un clic.
          </p>
        </div>
      </Section>

      {/* Pricing Table */}
      <Section>
        <PricingTable plans={plans} />
      </Section>

      {/* Add-ons */}
      <Section className="bg-surface-1/30">
        <div className="text-center mb-12">
          <h2 className="mb-4">Options complémentaires</h2>
          <p className="text-xl text-text-secondary">Personnalisez votre forfait selon vos besoins</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Minutes supplémentaires</h3>
              <div className="text-2xl font-bold gradient-text mb-2">À partir de 0,10€</div>
              <p className="text-sm text-text-secondary">par minute (volume dégressif)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Clonage de voix</h3>
              <div className="text-2xl font-bold gradient-text mb-2">1 990€</div>
              <p className="text-sm text-text-secondary">par voix personnalisée (one-time)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Support Premium</h3>
              <div className="text-2xl font-bold gradient-text mb-2">499€</div>
              <p className="text-sm text-text-secondary">par mois (24/7, Slack dédié)</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Comparison */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="mb-4">Toutes les fonctionnalités incluses</h2>
        </div>

        <div className="max-w-5xl mx-auto glass p-8 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Plateforme</h3>
              <ul className="space-y-2">
                {['ASR streaming', 'NLU avancé', 'TTS neurale', 'API REST', 'Webhooks'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-success" />
                      <span className="text-sm">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Sécurité & Conformité</h3>
              <ul className="space-y-2">
                {[
                  'Chiffrement E2E',
                  'RGPD compliant',
                  'Hébergement EU',
                  'ISO 27001',
                  'Droit à l\'oubli',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Support & Intégrations</h3>
              <ul className="space-y-2">
                {[
                  'Documentation complète',
                  'Intégrations CRM',
                  'Zapier & Make',
                  'Support multicanal',
                  'Communauté',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Pricing */}
      <Section className="bg-surface-1/30">
        <div className="text-center mb-12">
          <h2 className="mb-4">Questions fréquentes</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-sm text-text-secondary">{faq.a}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
