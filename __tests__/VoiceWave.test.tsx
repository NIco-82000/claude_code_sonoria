import { render } from '@testing-library/react'
import { VoiceWave } from '@/components/VoiceWave'

describe('VoiceWave', () => {
  it('renders without crashing', () => {
    const { container } = render(<VoiceWave />)
    const canvas = container.querySelector('canvas')
    expect(canvas).toBeInTheDocument()
  })

  it('applies custom intensity prop', () => {
    const { container } = render(<VoiceWave intensity={0.8} />)
    const canvas = container.querySelector('canvas')
    expect(canvas).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    const { container } = render(<VoiceWave className="custom-class" />)
    const canvas = container.querySelector('canvas')
    expect(canvas).toHaveClass('custom-class')
  })

  it('handles interactive mode', () => {
    const { container } = render(<VoiceWave interactive />)
    const canvas = container.querySelector('canvas')
    expect(canvas).toBeInTheDocument()
  })
})
