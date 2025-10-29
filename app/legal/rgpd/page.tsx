'use client'

import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Shield, Lock, Eye, Download, Trash2, FileText } from 'lucide-react'

export default function RGPDPage() {
  const rights = [
    {
      icon: Eye,
      title: 'Droit d\'accès',
      description: 'Consultez toutes les données que nous détenons sur vous.',
    },
    {
      icon: FileText,
      title: 'Droit de rectification',
      description: 'Corrigez vos informations personnelles à tout moment.',
    },
    {
      icon: Trash2,
      title: 'Droit à l\'effacement',
      description: 'Supprimez vos données (« droit à l\'oubli ») en un clic.',
    },
    {
      icon: Download,
      title: 'Droit à la portabilité',
      description: 'Exportez vos données dans un format structuré (JSON, CSV).',
    },
    {
      icon: Lock,
      title: 'Droit d\'opposition',
      description: 'Opposez-vous à certains traitements (marketing, profilage).',
    },
    {
      icon: Shield,
      title: 'Droit à la limitation',
      description: 'Limitez temporairement le traitement de vos données.',
    },
  ]

  return (
    <>
      <Section className="pt-32 pb-16 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <Shield className="w-3 h-3 mr-2" />
            RGPD
          </Badge>
          <h1 className="mb-6">Conformité RGPD</h1>
          <p className="text-xl text-text-secondary mb-8">
            Sonoya AI s'engage à protéger vos données personnelles conformément au Règlement
            Général sur la Protection des Données (RGPD).
          </p>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="mb-4">Vos droits RGPD</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Vous disposez d'un contrôle total sur vos données personnelles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((right, idx) => (
            <Card key={idx} className="hover:shadow-glow transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-success/10">
                    <right.icon className="w-6 h-6 text-success" />
                  </div>
                </div>
                <CardTitle className="text-lg mb-2">{right.title}</CardTitle>
                <CardDescription>{right.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-1/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos engagements RGPD</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-brand-primary" />
                  Chiffrement End-to-End
                </CardTitle>
                <CardDescription>
                  Toutes vos données (transcriptions, enregistrements) sont chiffrées avec AES-256
                  au repos et TLS 1.3 en transit. Clés de chiffrement gérées dans un HSM (Hardware
                  Security Module).
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-brand-primary" />
                  Hébergement EU
                </CardTitle>
                <CardDescription>
                  Vos données sont hébergées exclusivement en France et dans l'Union Européenne
                  (datacenters certifiés ISO 27001, SOC 2 Type II). Aucun transfert hors UE sans
                  votre consentement explicite.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-brand-primary" />
                  DPA & Sous-traitance
                </CardTitle>
                <CardDescription>
                  Nous signons un Data Processing Agreement (DPA) conforme aux exigences RGPD. Nous
                  agissons en tant que sous-traitant et nous engageons à respecter vos instructions
                  concernant le traitement des données.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Trash2 className="w-6 h-6 text-brand-primary" />
                  Suppression automatique
                </CardTitle>
                <CardDescription>
                  Les transcriptions sont automatiquement supprimées après 90 jours (paramétrable).
                  Vous pouvez déclencher la suppression immédiate à tout moment depuis votre
                  dashboard.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Download className="w-6 h-6 text-brand-primary" />
                  Export de données
                </CardTitle>
                <CardDescription>
                  Exportez toutes vos données (transcriptions, métadonnées, logs) en JSON ou CSV en
                  un clic. Portabilité complète pour faciliter la migration vers un autre service.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="w-6 h-6 text-brand-primary" />
                  Transparence totale
                </CardTitle>
                <CardDescription>
                  Logs d'accès disponibles : qui a accédé à vos données, quand, et pour quelle
                  raison. Rapport annuel de conformité RGPD fourni sur demande.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="glass p-12 text-center rounded-2xl max-w-3xl mx-auto">
          <h2 className="mb-4">Exercez vos droits RGPD</h2>
          <p className="text-xl text-text-secondary mb-8">
            Pour toute demande concernant vos données personnelles, contactez notre DPO (Délégué à
            la Protection des Données).
          </p>
          <div className="space-y-2 text-text-secondary">
            <p>
              Email : <strong className="text-brand-accent">dpo@sonoya.ai</strong>
            </p>
            <p>
              Téléphone : <strong className="text-brand-accent">+33 1 23 45 67 89</strong>
            </p>
            <p className="text-sm mt-4">Délai de réponse : 30 jours maximum</p>
          </div>
        </div>
      </Section>
    </>
  )
}
