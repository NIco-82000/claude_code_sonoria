'use client'

import { Section } from '@/components/Section'
import { TestimonialCard } from '@/components/TestimonialCard'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'Head of Customer Success',
      company: 'TechCorp',
      quote:
        'Sonoya AI a réduit notre temps de réponse de 70% et libéré nos agents pour les cas complexes. Le retour client est unanime : plus fluide, plus rapide, disponible 24/7. ROI atteint en 3 mois.',
    },
    {
      name: 'Alexandre Dupont',
      role: 'CTO',
      company: 'HealthPlus',
      quote:
        'L\'intégration avec notre CRM a été bluffante : 2 semaines de la signature au premier appel traité. La qualité TTS est impressionnante, nos patients ne font plus la différence avec un humain.',
    },
    {
      name: 'Marie Leclerc',
      role: 'Directrice Produit',
      company: 'RetailHub',
      quote:
        'Nous utilisons Sonoya AI pour la prise de RDV en magasin. +35% de conversions sur les appels entrants, et nos équipes adorent la simplicité du dashboard analytics.',
    },
    {
      name: 'Thomas Rousseau',
      role: 'VP Operations',
      company: 'LogiTrans',
      quote:
        'Le support 24/7 et la conformité RGPD étaient critiques pour nous. Sonoya AI coche toutes les cases, avec un SLA en béton. Zéro incident en 8 mois de production.',
    },
    {
      name: 'Camille Bernard',
      role: 'Responsable Innovation',
      company: 'BankTech',
      quote:
        'Nous avons testé 4 solutions vocales. Sonoya AI s\'est démarqué par la latence ultra-faible et la flexibilité des intégrations. L\'onboarding dédié a fait toute la différence.',
    },
    {
      name: 'Lucas Moreau',
      role: 'COO',
      company: 'EduSmart',
      quote:
        'Le multilingue était un must-have pour notre expansion internationale. Sonoya AI gère français, anglais, espagnol et allemand sans broncher. Impressionnant.',
    },
  ]

  const stats = [
    { label: 'Satisfaction client', value: '4.8/5', icon: Star },
    { label: 'Temps de réponse moyen', value: '-65%', icon: Star },
    { label: 'ROI moyen', value: '3 mois', icon: Star },
    { label: 'NPS', value: '+42', icon: Star },
  ]

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <Star className="w-3 h-3 mr-2" />
            Témoignages
          </Badge>
          <h1 className="mb-6">Ils ont transformé leurs interactions vocales avec Sonoya AI</h1>
          <p className="text-xl text-text-secondary mb-8">
            Découvrez comment nos clients réduisent leurs coûts, améliorent l'expérience
            utilisateur, et libèrent leurs équipes.
          </p>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6 text-center">
                <stat.icon className="w-8 h-8 text-brand-accent mx-auto mb-3" />
                <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface-1/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              quote={testimonial.quote}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Video Testimonial Placeholder */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="mb-4">Témoignages vidéo</h2>
          <p className="text-xl text-text-secondary">
            Écoutez directement nos clients partager leur expérience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1, 2].map((idx) => (
            <Card key={idx} className="overflow-hidden">
              <div className="aspect-video bg-surface-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-brand-primary" />
                  </div>
                  <p className="text-text-secondary">Vidéo disponible prochainement</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
