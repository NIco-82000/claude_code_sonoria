'use client'

import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/badge'
import { Shield } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <Shield className="w-3 h-3 mr-2" />
            Politique de Confidentialité
          </Badge>
          <h1 className="mb-6">Politique de Confidentialité</h1>
          <p className="text-text-secondary">Dernière mise à jour : 1er octobre 2024</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="space-y-8 text-text-secondary">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">1. Introduction</h2>
              <p>
                Sonoya AI (« nous », « notre », « nos ») s'engage à protéger la confidentialité de
                vos données personnelles. Cette politique décrit comment nous collectons, utilisons,
                stockons et protégeons vos informations conformément au Règlement Général sur la
                Protection des Données (RGPD).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                2. Données collectées
              </h2>
              <p>Nous collectons les types de données suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Données d'identification :</strong> nom, prénom, email, société, numéro
                  de téléphone
                </li>
                <li>
                  <strong>Données d'usage :</strong> transcriptions d'appels, métadonnées (durée,
                  timestamp, intent détecté), logs système
                </li>
                <li>
                  <strong>Données techniques :</strong> adresse IP, user agent, cookies
                </li>
                <li>
                  <strong>Données vocales :</strong> enregistrements audio et transcriptions
                  (chiffrés)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                3. Finalités du traitement
              </h2>
              <p>Vos données sont traitées pour :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir et améliorer nos services d'assistants vocaux IA</li>
                <li>Gérer votre compte et votre facturation</li>
                <li>Assurer le support client</li>
                <li>Analyser l'usage et optimiser les performances</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">4. Base légale</h2>
              <p>
                Le traitement de vos données repose sur :<br />- L'exécution du contrat de service
                <br />- Votre consentement explicite (pour les données vocales)
                <br />- Notre intérêt légitime (amélioration du service)
                <br />- Nos obligations légales (comptabilité, sécurité)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">5. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chiffrement AES-256 des données au repos et en transit (TLS 1.3)</li>
                <li>Hébergement en France/EU (datacenter certifié ISO 27001)</li>
                <li>Authentification multi-facteurs (MFA)</li>
                <li>Audits de sécurité réguliers</li>
                <li>Accès restreint aux données (principe du moindre privilège)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">6. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (« droit à l'oubli »)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="mt-3">
                Pour exercer vos droits, contactez-nous : <strong>privacy@sonoya.ai</strong>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">7. Conservation</h2>
              <p>
                Nous conservons vos données personnelles aussi longtemps que nécessaire pour les
                finalités décrites, puis nous les supprimons ou anonymisons. Transcriptions : 90
                jours par défaut (paramétrable). Données de facturation : 10 ans (obligation
                légale).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">8. Contact</h2>
              <p>
                Pour toute question concernant cette politique :
                <br />
                Email : <strong>privacy@sonoya.ai</strong>
                <br />
                Adresse : 123 Avenue des Champs-Élysées, 75008 Paris, France
                <br />
                DPO : dpo@sonoya.ai
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
