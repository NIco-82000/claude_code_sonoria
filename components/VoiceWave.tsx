'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface VoiceWaveProps {
  intensity?: number
  color?: string
  interactive?: boolean
  className?: string
}

export function VoiceWave({
  intensity = 0.6,
  color = 'var(--brand-accent)',
  interactive = true,
  className = '',
}: VoiceWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let currentIntensity = intensity

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    const bars = 60
    const barWidth = canvas.offsetWidth / bars

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < bars; i++) {
        const height =
          Math.sin(time * 0.002 + i * 0.3) * 30 * currentIntensity +
          Math.sin(time * 0.003 + i * 0.5) * 20 * currentIntensity +
          20

        const x = i * barWidth
        const y = canvas.offsetHeight / 2 - height / 2

        ctx.fillStyle = color
        ctx.globalAlpha = 0.6 + Math.sin(time * 0.002 + i * 0.2) * 0.4
        ctx.fillRect(x, y, barWidth - 2, height)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    if (interactive) {
      const handleMouseEnter = () => {
        currentIntensity = intensity * 1.5
      }
      const handleMouseLeave = () => {
        currentIntensity = intensity
      }

      canvas.addEventListener('mouseenter', handleMouseEnter)
      canvas.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        cancelAnimationFrame(animationFrameId)
        window.removeEventListener('resize', resize)
        canvas.removeEventListener('mouseenter', handleMouseEnter)
        canvas.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [intensity, color, interactive])

  return (
    <motion.canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}
