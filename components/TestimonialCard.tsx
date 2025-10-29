'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  quote: string
  avatarUrl?: string
  delay?: number
}

export function TestimonialCard({
  name,
  role,
  company,
  quote,
  avatarUrl,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full hover:shadow-glow transition-all">
        <CardContent className="pt-6">
          <Quote className="w-10 h-10 text-brand-accent/30 mb-4" />
          <p className="text-text-primary mb-6 leading-relaxed">{quote}</p>
          <div className="flex items-center gap-3">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={name}
                width={48}
                height={48}
                className="rounded-full"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center">
                <span className="text-lg font-bold text-brand-primary">
                  {name.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <div className="font-semibold text-text-primary">{name}</div>
              <div className="text-sm text-text-secondary">
                {role} • {company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
