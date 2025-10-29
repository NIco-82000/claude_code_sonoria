import { render, screen } from '@testing-library/react'
import { PricingTable, PricingPlan } from '@/components/PricingTable'

describe('PricingTable', () => {
  const mockPlans: PricingPlan[] = [
    {
      name: 'Essentiel',
      description: 'Pour démarrer',
      price: '199€',
      period: '/ mois',
      features: ['1 000 minutes', 'Support email'],
      cta: 'Démarrer',
      ctaLink: '/contact',
    },
    {
      name: 'Pro',
      description: 'Pour scaler',
      price: '599€',
      period: '/ mois',
      popular: true,
      features: ['5 000 minutes', 'Support prioritaire'],
      cta: 'Essayer',
      ctaLink: '/contact',
    },
  ]

  it('renders pricing plans correctly', () => {
    render(<PricingTable plans={mockPlans} />)

    expect(screen.getByText('Essentiel')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()
    expect(screen.getByText('199€')).toBeInTheDocument()
    expect(screen.getByText('599€')).toBeInTheDocument()
  })

  it('displays popular badge for popular plans', () => {
    render(<PricingTable plans={mockPlans} />)

    expect(screen.getByText('Populaire')).toBeInTheDocument()
  })

  it('renders all features', () => {
    render(<PricingTable plans={mockPlans} />)

    expect(screen.getByText('1 000 minutes')).toBeInTheDocument()
    expect(screen.getByText('Support email')).toBeInTheDocument()
    expect(screen.getByText('5 000 minutes')).toBeInTheDocument()
    expect(screen.getByText('Support prioritaire')).toBeInTheDocument()
  })
})
