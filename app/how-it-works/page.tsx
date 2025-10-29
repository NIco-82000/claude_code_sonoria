'use client'

import { Section } from '@/components/Section'
import { HowItWorks } from '@/components/HowItWorks'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { GradientButton } from '@/components/GradientButton'
import {
  Workflow,
  Database,
  Zap,
  BarChart3,
  Mic,
  Brain,
  MessageSquare,
  CheckCircle,
  PlayCircle,
} from 'lucide-react'
import Link from 'next/link'

export default function HowItWorksPage() {
  const steps = [
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

  const technicalFlow = [
    {
      icon: Mic,
      title: '1. Capture Audio',
      description:
        'L\'appel arrive via Twilio ou votre opérateur télécom. Stream audio vers notre ASR en temps réel.',
    },
    {
      icon: Brain,
      title: '2. Reconnaissance & NLU',
      description:
        'Whisper transcrit en <150ms. GPT-4 analyse l\'intent, extrait les entités, détecte le sentiment.',
    },
    {
      icon: Workflow,
      title: '3. Orchestration',
      description:
        'Le flow engine décide de l\'action : réponse directe, appel API, ou handoff vers humain.',
    },
    {
      icon: MessageSquare,
      title: '4. Synthèse Vocale',
      description:
        'TTS neurale génère la réponse en voix naturelle, avec intonation adaptée au contexte.',
    },
    {
      icon: CheckCircle,
      title: '5. Action & Log',
      description:
        'Action déclenchée (RDV créé, ticket ouvert). Transcription + metadata stockées (RGPD).',
    },
  ]

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <PlayCircle className="w-3 h-3 mr-2" />
            Comment ça marche
          </Badge>
          <h1 className="mb-6">De l'intégration à l'optimisation en 4 étapes</h1>
          <p className="text-xl text-text-secondary mb-8">
            Un processus simple et guidé pour lancer votre premier assistant vocal IA en quelques
            jours.
          </p>
        </div>
      </Section>

      {/* Main Steps */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="mb-4">Votre parcours avec Sonoya AI</h2>
        </div>
        <HowItWorks steps={steps} />
      </Section>

      {/* Technical Flow */}
      <Section className="bg-surface-1/30">
        <div className="text-center mb-12">
          <h2 className="mb-4">Flux technique d'un appel</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Plongée dans les coulisses : comment Sonoya AI traite chaque interaction vocale.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {technicalFlow.map((step, idx) => (
            <Card key={idx} className="hover:shadow-glow transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-brand-primary/10 flex-shrink-0">
                    <step.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* Detailed Steps */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="mb-4">Détails par étape</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-brand-primary/10">
                  <Workflow className="w-5 h-5 text-brand-primary" />
                </div>
                <Badge variant="secondary">Semaine 1</Badge>
              </div>
              <CardTitle className="mb-2">Intégration & Configuration</CardTitle>
              <CardDescription className="space-y-2 text-left">
                <p>• Accès API & webhooks</p>
                <p>• Connexion CRM / calendrier</p>
                <p>• Import de votre base de connaissances</p>
                <p>• Configuration numéro de téléphone</p>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-brand-primary/10">
                  <Database className="w-5 h-5 text-brand-primary" />
                </div>
                <Badge variant="secondary">Semaine 1-2</Badge>
              </div>
              <CardTitle className="mb-2">Scénarios & Prompts</CardTitle>
              <CardDescription className="space-y-2 text-left">
                <p>• Design flows conversationnels</p>
                <p>• Rédaction prompts système</p>
                <p>• Configuration intents & entities</p>
                <p>• Tests en environnement sandbox</p>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-brand-primary/10">
                  <Zap className="w-5 h-5 text-brand-primary" />
                </div>
                <Badge variant="secondary">Semaine 2-3</Badge>
              </div>
              <CardTitle className="mb-2">Lancement & Monitoring</CardTitle>
              <CardDescription className="space-y-2 text-left">
                <p>• Déploiement progressif (A/B test)</p>
                <p>• Monitoring en temps réel</p>
                <p>• Ajustements basés sur feedback</p>
                <p>• Formation équipes internes</p>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-brand-primary/10">
                  <BarChart3 className="w-5 h-5 text-brand-primary" />
                </div>
                <Badge variant="secondary">Continu</Badge>
              </div>
              <CardTitle className="mb-2">Optimisation Continue</CardTitle>
              <CardDescription className="space-y-2 text-left">
                <p>• Analyse performance hebdomadaire</p>
                <p>• Fine-tuning modèles ASR/NLU</p>
                <p>• A/B testing nouveaux prompts</p>
                <p>• Évolution fonctionnalités</p>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-surface-1/30">
        <div className="glass p-12 text-center rounded-2xl max-w-3xl mx-auto">
          <h2 className="mb-4">Prêt à lancer votre premier assistant ?</h2>
          <p className="text-xl text-text-secondary mb-8">
            Réservez une démo personnalisée et découvrez comment Sonoya AI peut transformer vos
            interactions vocales.
          </p>
          <Link href="/contact">
            <GradientButton variant="gradient" size="xl" trackingLabel="how-demo">
              Réserver une démo
            </GradientButton>
          </Link>
        </div>
      </Section>
    </>
  )
}
