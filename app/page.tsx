'use client'

import { VoiceWave } from '@/components/VoiceWave'
import { GradientButton } from '@/components/GradientButton'
import { KpiStat } from '@/components/KpiStat'
import { ProblemCard } from '@/components/ProblemCard'
import { SolutionCard } from '@/components/SolutionCard'
import { AnalyticsPanel } from '@/components/AnalyticsPanel'
import { MarketProof } from '@/components/MarketProof'
import { HowItWorks } from '@/components/HowItWorks'
import { IntegrationLogo } from '@/components/IntegrationLogo'
import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/badge'
import {
  Play,
  Clock,
  Bot,
  Brain,
  Zap,
  MessageSquare,
  Workflow,
  Database,
  BarChart3,
  Rocket,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { trackScroll } from '@/lib/analytics'
import { content } from '@/lib/i18n'

export default function Home() {
  useEffect(() => {
    const cleanup = trackScroll()
    return cleanup
  }, [])

  const howItWorksSteps = [
    {
      title: 'Intégration',
      description: 'Connectez vos outils (CRM, calendrier, base de données) via API ou Zapier.',
      icon: Workflow,
    },
    {
      title: 'Synchronisation',
      description: 'Importez vos données, configurez vos scénarios conversationnels.',
      icon: Database,
    },
    {
      title: 'Automatisation',
      description: 'L\'assistant gère les appels, qualifie, book, et agit en temps réel.',
      icon: Zap,
    },
    {
      title: 'Analyse',
      description: 'Suivez la performance, optimisez vos prompts, améliorez en continu.',
      icon: BarChart3,
    },
  ]

  const integrations = [
    'Salesforce',
    'Zendesk',
    'HubSpot',
    'Twilio',
    'Shopify',
    'Slack',
    'Zapier',
    'REST API',
  ]

  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-24 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="text-center max-w-5xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <Rocket className="w-3 h-3 mr-2" />
            Nouvelle génération d'assistants vocaux IA
          </Badge>

          <h1 className="mb-6 animate-fade-in">{content.hero.title}</h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {content.hero.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-accent" />
                <span className="text-text-secondary">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact">
              <GradientButton size="xl" variant="gradient" trackingLabel="hero-demo">
                {content.hero.cta.primary}
              </GradientButton>
            </Link>
            <Link href="/integrations">
              <GradientButton size="xl" variant="ghost" trackingLabel="hero-integrations">
                {content.hero.cta.secondary}
              </GradientButton>
            </Link>
          </div>

          <div className="w-full h-48 rounded-lg glass overflow-hidden">
            <VoiceWave intensity={0.7} interactive />
          </div>
        </div>
      </Section>

      {/* KPIs Section */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {content.kpis.map((kpi, idx) => (
            <KpiStat
              key={idx}
              label={kpi.label}
              value={kpi.value}
              unit={kpi.unit}
              trend={kpi.trend as 'up' | 'down' | 'neutral'}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Problem vs Solution */}
      <Section className="bg-surface-1/30">
        <div className="text-center mb-16">
          <h2 className="mb-4">Du problème à la solution</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Les assistants vocaux traditionnels frustrent. Sonoya AI transforme chaque interaction
            en expérience fluide.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <ProblemCard
              title="IVR rigides"
              description="Menus interminables, reconnaissance limitée, zéro contexte."
              icon={Bot}
              delay={0}
            />
            <SolutionCard
              title="NLU Multilingue"
              description="Compréhension naturelle, 30+ langues, détection d'intent en temps réel."
              icon={Brain}
              delay={0.1}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProblemCard
              title="Temps d'attente"
              description="Files d'attente, transferts multiples, disponibilité limitée."
              icon={Clock}
              delay={0.2}
            />
            <SolutionCard
              title="Actions Temps Réel"
              description="Réponse instantanée, connexion API, disponibilité 24/7/365."
              icon={Zap}
              delay={0.3}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProblemCard
              title="Voix robotique"
              description="TTS monotone, pas d'émotion, expérience déshumanisée."
              icon={MessageSquare}
              delay={0.4}
            />
            <SolutionCard
              title="TTS Neurale"
              description="Voix naturelles, intonation adaptative, personnalités multiples."
              icon={MessageSquare}
              delay={0.5}
            />
          </div>
        </div>
      </Section>

      {/* Video Demo */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="mb-4">Voyez l'agent en action</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            2 minutes pour comprendre comment Sonoya AI gère un appel de bout en bout.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg glass overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-4">
                <Play className="w-10 h-10 text-brand-primary" />
              </div>
              <p className="text-text-secondary">Démo vidéo disponible prochainement</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Analytics Panel */}
      <Section className="bg-surface-1/30">
        <div className="text-center mb-12">
          <h2 className="mb-4">Dashboard Analytics Avancé</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Suivez chaque interaction, analysez les performances, optimisez en continu.
          </p>
        </div>
        <AnalyticsPanel />
      </Section>

      {/* Market Proof */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="mb-4">Le marché vocal décolle</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            La voix devient l'interface la plus naturelle pour interagir avec les services.
          </p>
        </div>
        <MarketProof />
      </Section>

      {/* How It Works */}
      <Section className="bg-surface-1/30">
        <div className="text-center mb-12">
          <h2 className="mb-4">Comment ça marche</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            De l'intégration à l'analyse, en 4 étapes simples.
          </p>
        </div>
        <HowItWorks steps={howItWorksSteps} />
      </Section>

      {/* CTA Large */}
      <Section>
        <div className="glass p-12 md:p-16 text-center rounded-2xl">
          <h2 className="mb-4">Donnez une voix intelligente à votre produit</h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Rejoignez les entreprises qui transforment leurs interactions vocales avec Sonoya AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <GradientButton size="xl" variant="gradient" trackingLabel="cta-large-demo">
                Demander une démo
              </GradientButton>
            </Link>
            <Link href="/contact">
              <GradientButton size="xl" variant="outline" trackingLabel="cta-large-expert">
                Parler à un expert
              </GradientButton>
            </Link>
          </div>
        </div>
      </Section>

      {/* Integrations */}
      <Section className="bg-surface-1/30">
        <div className="text-center mb-12">
          <h2 className="mb-4">Intégrations natives</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Connectez Sonoya AI à vos outils préférés en quelques clics.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, idx) => (
            <IntegrationLogo key={idx} name={integration} delay={idx * 0.05} />
          ))}
        </div>
      </Section>
    </>
  )
}
