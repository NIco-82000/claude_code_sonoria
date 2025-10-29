'use client'

import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/badge'
import { FileText } from 'lucide-react'

export default function TermsPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <FileText className="w-3 h-3 mr-2" />
            Conditions Générales
          </Badge>
          <h1 className="mb-6">Conditions Générales d'Utilisation</h1>
          <p className="text-text-secondary">Dernière mise à jour : 1er octobre 2024</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="space-y-8 text-text-secondary">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">1. Objet</h2>
              <p>
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et
                l'utilisation de la plateforme Sonoya AI, service d'assistants vocaux basé sur
                l'intelligence artificielle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">2. Acceptation</h2>
              <p>
                En utilisant nos services, vous acceptez sans réserve les présentes CGU. Si vous
                n'acceptez pas ces conditions, vous ne devez pas utiliser notre plateforme.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">3. Services fournis</h2>
              <p>
                Sonoya AI propose une plateforme SaaS permettant de créer, déployer et gérer des
                assistants vocaux IA. Les fonctionnalités incluent :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reconnaissance vocale automatique (ASR)</li>
                <li>Compréhension du langage naturel (NLU)</li>
                <li>Synthèse vocale (TTS)</li>
                <li>Intégrations API et webhooks</li>
                <li>Dashboard analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">4. Inscription</h2>
              <p>
                Pour utiliser nos services, vous devez créer un compte en fournissant des
                informations exactes et complètes. Vous êtes responsable de la confidentialité de
                vos identifiants.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">5. Tarification</h2>
              <p>
                Les tarifs sont indiqués sur notre page Pricing et peuvent être modifiés moyennant
                un préavis de 30 jours. La facturation se fait mensuellement ou annuellement selon
                votre abonnement. Les dépassements de quota sont facturés à l'usage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                6. Propriété intellectuelle
              </h2>
              <p>
                Sonoya AI détient tous les droits de propriété intellectuelle sur la plateforme,
                les algorithmes et la documentation. Vous conservez la propriété de vos données
                (transcriptions, configurations, contenus).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                7. Utilisation acceptable
              </h2>
              <p>Vous vous engagez à ne pas :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utiliser le service à des fins illégales</li>
                <li>Tenter de contourner les mesures de sécurité</li>
                <li>Revendre ou redistribuer le service sans autorisation</li>
                <li>Générer du spam ou du contenu nuisible</li>
                <li>Surcharger l'infrastructure (abuse/DoS)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                8. Disponibilité et SLA
              </h2>
              <p>
                Nous nous efforçons d'assurer une disponibilité maximale du service. Les SLA sont
                définis par plan : Plan Pro : 99,5% uptime Plan Entreprise : 99,9% uptime En cas de
                non-respect, des crédits de service sont appliqués conformément à nos SLA.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                9. Limitation de responsabilité
              </h2>
              <p>
                Sonoya AI ne peut être tenu responsable des dommages indirects, pertes de profits,
                ou interruptions d'activité liés à l'utilisation du service. Notre responsabilité
                est limitée au montant payé au cours des 12 derniers mois.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">10. Résiliation</h2>
              <p>
                Vous pouvez résilier votre abonnement à tout moment depuis votre compte. Nous
                pouvons suspendre ou résilier votre accès en cas de violation des présentes CGU.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                11. Modifications des CGU
              </h2>
              <p>
                Nous nous réservons le droit de modifier les présentes CGU. Les utilisateurs seront
                notifiés par email 30 jours avant l'entrée en vigueur des modifications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                12. Droit applicable
              </h2>
              <p>
                Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux
                tribunaux compétents de Paris.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">13. Contact</h2>
              <p>
                Pour toute question concernant ces CGU :
                <br />
                Email : <strong>legal@sonoya.ai</strong>
                <br />
                Adresse : 123 Avenue des Champs-Élysées, 75008 Paris, France
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
