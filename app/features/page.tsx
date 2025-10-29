'use client'

import { Section } from '@/components/Section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { GradientButton } from '@/components/GradientButton'
import { Badge } from '@/components/ui/badge'
import {
  Mic,
  Brain,
  Zap,
  MessageSquare,
  Database,
  Lock,
  BarChart3,
  Settings,
  Globe,
  Workflow,
  FileText,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FeaturesPage() {
  const features = [
    {
      icon: Mic,
      category: 'ASR Streaming',
      title: 'Reconnaissance Vocale en Temps Réel',
      description:
        'ASR streaming avec latence <150ms. Modèles Whisper fine-tunés sur votre domaine. Support 30+ langues avec détection automatique.',
      details: [
        'Latence ultra-faible <150ms',
        'Fine-tuning sur vocabulaire métier',
        'Détection automatique de langue',
        'Gestion des accents régionaux',
      ],
    },
    {
      icon: Brain,
      category: 'NLU & Intent',
      title: 'Compréhension du Langage Naturel',
      description:
        'Extraction d\'intents et d\'entités avec LLMs. Détection de sentiment en temps réel. Gestion du contexte multi-tours.',
      details: [
        'Intent classification avancée',
        'Entity extraction (dates, montants, etc.)',
        'Analyse de sentiment',
        'Mémoire conversationnelle',
      ],
    },
    {
      icon: Sparkles,
      category: 'Prompt Engineering',
      title: 'Orchestration de Prompts',
      description:
        'Studio visuel de prompt engineering. A/B testing de formulations. Versioning et rollback instantané.',
      details: [
        'Éditeur de prompts visuel',
        'Variables dynamiques',
        'Tests A/B intégrés',
        'Historique complet',
      ],
    },
    {
      icon: Database,
      category: 'Mémoire',
      title: 'Contexte Conversationnel',
      description:
        'Stockage sémantique des échanges. Récupération intelligente du contexte. Profils utilisateurs enrichis.',
      details: [
        'Vector database sémantique',
        'Récupération contextuelle',
        'Profils utilisateurs',
        'Historique complet',
      ],
    },
    {
      icon: MessageSquare,
      category: 'TTS Neural',
      title: 'Synthèse Vocale Naturelle',
      description:
        'TTS neurale avec 20+ voix premium. Personnalisation du ton et du débit. Support SSML pour contrôle fin.',
      details: [
        '20+ voix premium',
        'Tonalité adaptative',
        'Support SSML complet',
        'Clonage de voix (entreprise)',
      ],
    },
    {
      icon: Zap,
      category: 'Actions',
      title: 'Déclenchement d\'Actions',
      description:
        'Appels d\'API synchrones pendant la conversation. Webhooks entrants/sortants. Intégration Zapier native.',
      details: [
        'API REST/GraphQL',
        'Webhooks bidirectionnels',
        'Zapier & Make',
        'Authentification sécurisée',
      ],
    },
    {
      icon: Lock,
      category: 'Sécurité',
      title: 'RGPD & Conformité',
      description:
        'Chiffrement E2E des transcriptions. Hébergement EU. Droit à l\'oubli en un clic. Certifications ISO 27001.',
      details: [
        'Chiffrement AES-256',
        'Hébergement France/EU',
        'Droit à l\'oubli',
        'ISO 27001, SOC 2',
      ],
    },
    {
      icon: BarChart3,
      category: 'Analytics',
      title: 'Insights Métier',
      description:
        'Dashboard temps réel. Analyse de sentiment et NPS vocal. Tracking de résolution et escalade.',
      details: [
        'Metrics temps réel',
        'NPS vocal automatique',
        'Taux de résolution',
        'Parcours utilisateur',
      ],
    },
    {
      icon: Globe,
      category: 'Multilingue',
      title: 'Support International',
      description:
        'ASR et TTS pour 30+ langues. Détection automatique de langue. Switch dynamique en cours d\'appel.',
      details: [
        'Français, anglais, espagnol...',
        'Détection auto',
        'Switch en live',
        'Localisation complète',
      ],
    },
    {
      icon: Workflow,
      category: 'Orchestration',
      title: 'Flows Conversationnels',
      description:
        'Builder visuel no-code. Branches conditionnelles. Fallbacks et escalade humaine.',
      details: [
        'Builder drag & drop',
        'Logique conditionnelle',
        'Fallback automatique',
        'Handoff vers humain',
      ],
    },
    {
      icon: FileText,
      category: 'Transcription',
      title: 'Enregistrement & Transcription',
      description:
        'Enregistrement automatique de tous les appels. Transcription avec timestamps. Export JSON/CSV/PDF.',
      details: [
        'Recording automatique',
        'Transcription enrichie',
        'Export multi-formats',
        'Recherche full-text',
      ],
    },
    {
      icon: Settings,
      category: 'Personnalisation',
      title: 'Fine-Tuning Avancé',
      description:
        'Entraînement sur vos données. Ajustement de tonalité. Vocabulaire métier spécifique.',
      details: [
        'Fine-tuning ASR',
        'Ajustement tonalité',
        'Lexique métier',
        'Optimisation continue',
      ],
    },
  ]

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <Sparkles className="w-3 h-3 mr-2" />
            Fonctionnalités Avancées
          </Badge>
          <h1 className="mb-6">Tout ce dont vous avez besoin pour des interactions vocales IA exceptionnelles</h1>
          <p className="text-xl text-text-secondary mb-8">
            De la reconnaissance vocale à l'analytics, une plateforme complète pour créer,
            déployer et optimiser vos assistants vocaux IA.
          </p>
        </div>
      </Section>

      {/* Features Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Card className="h-full hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-brand-primary/10">
                      <feature.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <Badge variant="secondary">{feature.category}</Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                  <CardDescription className="mb-4">{feature.description}</CardDescription>
                  <ul className="space-y-2">
                    {feature.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Sticky */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="glass px-6 py-4 rounded-full shadow-soft flex items-center gap-4">
            <span className="text-sm font-medium">Prêt à démarrer ?</span>
            <Link href="/contact">
              <GradientButton variant="gradient" size="default" trackingLabel="features-cta">
                Demander une démo
              </GradientButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  )
}
