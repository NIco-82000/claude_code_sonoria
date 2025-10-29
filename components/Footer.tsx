'use client'

import Link from 'next/link'
import { navigation } from '@/lib/i18n'
import { Linkedin, Twitter, Youtube } from 'lucide-react'

const iconMap = {
  Linkedin,
  Twitter,
  Youtube,
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-0 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-extrabold gradient-text">Sonoya AI</span>
            </div>
            <p className="text-text-secondary mb-6 max-w-md">
              Des assistants vocaux IA qui comprennent, répondent et agissent. Transformez vos
              interactions vocales en expériences exceptionnelles.
            </p>
            <div className="flex items-center gap-4">
              {navigation.footer.social.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface-1 hover:bg-brand-primary/10 transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5 text-text-secondary hover:text-brand-primary transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Produit</h3>
            <ul className="space-y-3">
              {navigation.footer.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-brand-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Ressources</h3>
            <ul className="space-y-3">
              {navigation.footer.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-brand-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Légal</h3>
            <ul className="space-y-3">
              {navigation.footer.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-brand-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Sonoya AI. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://status.sonoya.ai"
              className="text-sm text-text-secondary hover:text-brand-accent transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              Statut
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
