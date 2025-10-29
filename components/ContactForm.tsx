'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { trackEvent } from '@/lib/analytics'
import { CheckCircle2 } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  company: z.string().min(2, 'Le nom de société doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  volume: z.string().min(1, 'Veuillez sélectionner un volume'),
  useCase: z.string().min(10, 'Veuillez décrire votre cas d\'usage (min. 10 caractères)'),
  timeline: z.string().min(1, 'Veuillez sélectionner un délai'),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    console.log('Form data:', data)
    trackEvent('form_submit', { form: 'contact' })

    // Simuler envoi
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
  }

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = []
    if (step === 1) fieldsToValidate = ['name', 'company', 'email']
    if (step === 2) fieldsToValidate = ['volume', 'useCase']

    const isValid = await trigger(fieldsToValidate)
    if (isValid) setStep(step + 1)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <CardContent className="pt-12 pb-12">
          <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Demande envoyée !</h3>
          <p className="text-text-secondary">
            Notre équipe vous contactera sous 24h ouvrées pour discuter de votre projet.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant={step >= 1 ? 'default' : 'outline'}>1</Badge>
          <Badge variant={step >= 2 ? 'default' : 'outline'}>2</Badge>
          <Badge variant={step >= 3 ? 'default' : 'outline'}>3</Badge>
        </div>
        <CardTitle>
          {step === 1 && 'Vos informations'}
          {step === 2 && 'Votre projet'}
          {step === 3 && 'Récapitulatif'}
        </CardTitle>
        <CardDescription>
          {step === 1 && 'Présentez-vous en quelques mots'}
          {step === 2 && 'Dites-nous en plus sur votre besoin'}
          {step === 3 && 'Vérifiez et envoyez votre demande'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet *</label>
                <Input {...register('name')} placeholder="Jean Dupont" />
                {errors.name && (
                  <p className="text-danger text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Société *</label>
                <Input {...register('company')} placeholder="Acme Corp" />
                {errors.company && (
                  <p className="text-danger text-sm mt-1">{errors.company.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email professionnel *</label>
                <Input {...register('email')} type="email" placeholder="jean@acme.com" />
                {errors.email && (
                  <p className="text-danger text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <Button type="button" onClick={nextStep} className="w-full" variant="gradient">
                Suivant
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Volume d'appels / mois *</label>
                <select
                  {...register('volume')}
                  className="flex h-12 w-full rounded-lg border border-border bg-surface-1 px-4 py-2 text-sm"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="<1000">&lt; 1 000</option>
                  <option value="1000-5000">1 000 - 5 000</option>
                  <option value="5000-20000">5 000 - 20 000</option>
                  <option value=">20000">&gt; 20 000</option>
                </select>
                {errors.volume && (
                  <p className="text-danger text-sm mt-1">{errors.volume.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cas d'usage *</label>
                <Textarea
                  {...register('useCase')}
                  placeholder="Ex: Automatiser la prise de RDV, qualifier des leads, support client..."
                  rows={4}
                />
                {errors.useCase && (
                  <p className="text-danger text-sm mt-1">{errors.useCase.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Délai souhaité *</label>
                <select
                  {...register('timeline')}
                  className="flex h-12 w-full rounded-lg border border-border bg-surface-1 px-4 py-2 text-sm"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="urgent">Urgent ({"<"} 1 mois)</option>
                  <option value="1-3months">1-3 mois</option>
                  <option value="3-6months">3-6 mois</option>
                  <option value="exploration">Phase d'exploration</option>
                </select>
                {errors.timeline && (
                  <p className="text-danger text-sm mt-1">{errors.timeline.message}</p>
                )}
              </div>
              <div className="flex gap-3">
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1"
                >
                  Retour
                </Button>
                <Button type="button" onClick={nextStep} variant="gradient" className="flex-1">
                  Suivant
                </Button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="space-y-4 p-4 rounded-lg bg-surface-1">
                <p className="text-sm text-text-secondary">
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe
                  commerciale. Vos données sont traitées conformément à notre politique de
                  confidentialité.
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  variant="outline"
                  className="flex-1"
                >
                  Retour
                </Button>
                <Button
                  type="submit"
                  variant="gradient"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi...' : 'Envoyer la demande'}
                </Button>
              </div>
            </>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
