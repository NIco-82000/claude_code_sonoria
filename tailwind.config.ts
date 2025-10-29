import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1240px',
      },
    },
    extend: {
      colors: {
        brand: {
          primary: '#6D5BF6',
          accent: '#22D3EE',
        },
        surface: {
          0: '#0B0F14',
          1: 'rgba(255,255,255,0.06)',
        },
        text: {
          primary: '#E6ECF2',
          secondary: '#A9B4C2',
        },
        border: '#202632',
        ring: '#22D3EE',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '96': '96px',
        '128': '128px',
      },
      borderRadius: {
        lg: '20px',
        md: '16px',
        sm: '12px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(90deg, #6D5BF6 0%, #22D3EE 100%)',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0,0,0,0.25)',
        'glow': '0 0 0 2px rgba(34, 211, 238, 0.35)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'wave': {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(1.5)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'wave': 'wave 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
