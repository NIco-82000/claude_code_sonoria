'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface KpiStatProps {
  label: string
  value: string
  unit?: string
  trend?: 'up' | 'down' | 'neutral'
  delay?: number
}

export function KpiStat({ label, value, unit = '', trend = 'neutral', delay = 0 }: KpiStatProps) {
  const trendIcons = {
    up: <TrendingUp className="w-5 h-5 text-success" />,
    down: <TrendingDown className="w-5 h-5 text-danger" />,
    neutral: <Minus className="w-5 h-5 text-text-secondary" />,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="text-center hover:shadow-glow transition-all">
        <div className="flex items-center justify-center mb-2">{trendIcons[trend]}</div>
        <div className="text-4xl font-extrabold gradient-text mb-1">
          {value}
          {unit && <span className="text-2xl ml-1">{unit}</span>}
        </div>
        <div className="text-sm text-text-secondary font-medium">{label}</div>
      </Card>
    </motion.div>
  )
}
