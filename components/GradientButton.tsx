'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

interface GradientButtonProps extends ButtonProps {
  loading?: boolean
  trackingLabel?: string
}

export function GradientButton({
  children,
  loading = false,
  trackingLabel,
  onClick,
  ...props
}: GradientButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (trackingLabel) {
      trackEvent('cta_click', { label: trackingLabel })
    }
    onClick?.(e)
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button onClick={handleClick} disabled={loading} {...props}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Button>
    </motion.div>
  )
}
