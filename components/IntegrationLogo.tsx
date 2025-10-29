'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

interface IntegrationLogoProps {
  name: string
  logoUrl?: string
  delay?: number
}

export function IntegrationLogo({ name, logoUrl, delay = 0 }: IntegrationLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className="p-6 flex items-center justify-center h-24 hover:shadow-glow transition-all cursor-pointer">
        {logoUrl ? (
          <img src={logoUrl} alt={name} className="max-h-12 max-w-full object-contain" />
        ) : (
          <span className="font-bold text-lg text-text-secondary">{name}</span>
        )}
      </Card>
    </motion.div>
  )
}
