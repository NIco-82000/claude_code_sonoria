'use client'

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { TrendingUp, Calendar, DollarSign, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export function MarketProof() {
  const proofs = [
    {
      icon: TrendingUp,
      title: 'Tendance Lourde',
      stat: '+127%',
      description: 'Croissance annuelle du marché vocal (2023-2028)',
    },
    {
      icon: Calendar,
      title: 'Voix & Réservation',
      stat: '40%',
      description: 'Des réservations se feront par voix d\'ici 2026',
    },
    {
      icon: DollarSign,
      title: 'ROI Immédiat',
      stat: '3 mois',
      description: 'Retour sur investissement moyen constaté',
    },
    {
      icon: Zap,
      title: 'Marché Perfectible',
      stat: '78%',
      description: 'Des utilisateurs frustrés par les IVR actuels',
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {proofs.map((proof, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <Card className="text-center h-full hover:shadow-glow transition-all">
            <CardHeader>
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-brand-accent/10">
                  <proof.icon className="w-6 h-6 text-brand-accent" />
                </div>
              </div>
              <div className="text-3xl font-extrabold gradient-text mb-2">{proof.stat}</div>
              <CardTitle className="text-lg mb-2">{proof.title}</CardTitle>
              <CardDescription className="text-xs">{proof.description}</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
