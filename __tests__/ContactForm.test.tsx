import { render, screen } from '@testing-library/react'
import { ContactForm } from '@/components/ContactForm'

describe('ContactForm', () => {
  it('renders form fields', () => {
    render(<ContactForm />)

    expect(screen.getByText('Vos informations')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Jean Dupont')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Acme Corp')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('jean@acme.com')).toBeInTheDocument()
  })

  it('renders wizard steps', () => {
    render(<ContactForm />)

    // Check for step badges
    const badges = screen.getAllByRole('status')
    expect(badges.length).toBeGreaterThan(0)
  })

  it('shows next button on first step', () => {
    render(<ContactForm />)

    expect(screen.getByText('Suivant')).toBeInTheDocument()
  })
})
