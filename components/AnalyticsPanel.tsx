'use client'

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Activity, Shield, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

export function AnalyticsPanel() {
  const features = [
    {
      icon: Activity,
      title: 'Suivi Temps Réel',
      description:
        'Visualisez chaque appel en direct : intent détecté, sentiment, actions déclenchées.',
    },
    {
      icon: Shield,
      title: 'RGPD & Export',
      description: 'Transcriptions chiffrées, export JSON/CSV, droit à l\'oubli en un clic.',
    },
    {
      icon: BarChart3,
      title: 'Indicateurs Métier',
      description: 'Taux de résolution, NPS vocal, parcours utilisateur, A/B testing de prompts.',
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <Card className="h-full hover:shadow-glow transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-brand-primary/10">
                  <feature.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
