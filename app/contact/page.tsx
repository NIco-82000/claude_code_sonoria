'use client'

import { Section } from '@/components/Section'
import { ContactForm } from '@/components/ContactForm'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <MessageSquare className="w-3 h-3 mr-2" />
            Contact
          </Badge>
          <h1 className="mb-6">Parlons de votre projet</h1>
          <p className="text-xl text-text-secondary mb-8">
            Réservez une démo personnalisée ou posez vos questions. Notre équipe vous répond sous
            24h.
          </p>
        </div>
      </Section>

      {/* Form & Info */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-brand-primary/10">
                    <Mail className="w-5 h-5 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </div>
                <CardDescription>
                  <a
                    href="mailto:contact@sonoya.ai"
                    className="text-brand-accent hover:text-brand-primary transition-colors"
                  >
                    contact@sonoya.ai
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-brand-primary/10">
                    <Phone className="w-5 h-5 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg">Téléphone</CardTitle>
                </div>
                <CardDescription>
                  <a
                    href="tel:+33123456789"
                    className="text-brand-accent hover:text-brand-primary transition-colors"
                  >
                    +33 1 23 45 67 89
                  </a>
                  <p className="text-text-secondary text-sm mt-1">Lun-Ven 9h-18h</p>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-brand-primary/10">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg">Adresse</CardTitle>
                </div>
                <CardDescription>
                  123 Avenue des Champs-Élysées
                  <br />
                  75008 Paris, France
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="glass p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Réponse rapide garantie</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2" />
                  <span>Réponse sous 24h en jours ouvrés</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2" />
                  <span>Démo personnalisée dans la semaine</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2" />
                  <span>Devis détaillé sous 48h</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}
