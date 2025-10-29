'use client'

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface Step {
  title: string
  description: string
  icon: LucideIcon
}

interface HowItWorksProps {
  steps: Step[]
}

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative"
        >
          {idx < steps.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent" />
          )}
          <Card className="h-full hover:shadow-glow transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-full bg-brand-primary/10">
                  <step.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <span className="text-3xl font-extrabold text-text-secondary/30">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <CardTitle className="text-lg mb-2">{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
