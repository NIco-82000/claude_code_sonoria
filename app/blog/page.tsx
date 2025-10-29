'use client'

import { Section } from '@/components/Section'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BlogPage() {
  const posts = [
    {
      title: 'Comment les assistants vocaux IA transforment le service client',
      excerpt:
        'Découvrez les 5 cas d\'usage qui révolutionnent l\'expérience client grâce à la voix IA.',
      category: 'Cas d\'usage',
      date: '15 Oct 2024',
      author: 'Sophie Martin',
      readTime: '7 min',
    },
    {
      title: 'ASR vs NLU : comprendre la stack technique d\'un assistant vocal',
      excerpt:
        'Plongée technique dans les briques essentielles : reconnaissance vocale, compréhension du langage naturel, et synthèse vocale.',
      category: 'Technique',
      date: '10 Oct 2024',
      author: 'Alexandre Dupont',
      readTime: '10 min',
    },
    {
      title: 'RGPD et assistants vocaux : ce que vous devez savoir',
      excerpt:
        'Guide complet pour assurer la conformité RGPD de vos assistants vocaux : chiffrement, consentement, droit à l\'oubli.',
      category: 'Conformité',
      date: '5 Oct 2024',
      author: 'Marie Leclerc',
      readTime: '5 min',
    },
    {
      title: '10 bonnes pratiques pour designer un flow conversationnel efficace',
      excerpt:
        'De la définition des intents à la gestion des erreurs, nos conseils pour créer des conversations fluides.',
      category: 'Design',
      date: '1 Oct 2024',
      author: 'Thomas Rousseau',
      readTime: '8 min',
    },
    {
      title: 'Intégrer un assistant vocal avec votre CRM : guide étape par étape',
      excerpt:
        'Connectez Sonoya AI à Salesforce, HubSpot ou Pipedrive pour qualifier vos leads automatiquement.',
      category: 'Intégration',
      date: '25 Sep 2024',
      author: 'Camille Bernard',
      readTime: '6 min',
    },
    {
      title: 'ROI des assistants vocaux : comment mesurer l\'impact business',
      excerpt:
        'KPIs clés, méthodes de calcul, et benchmarks sectoriels pour quantifier le retour sur investissement.',
      category: 'Business',
      date: '20 Sep 2024',
      author: 'Lucas Moreau',
      readTime: '9 min',
    },
  ]

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <BookOpen className="w-3 h-3 mr-2" />
            Blog
          </Badge>
          <h1 className="mb-6">Ressources & Insights</h1>
          <p className="text-xl text-text-secondary mb-8">
            Guides pratiques, études de cas, et actualités sur les assistants vocaux IA.
          </p>
        </div>
      </Section>

      {/* Featured Post */}
      <Section>
        <Card className="glass border-brand-primary border-2 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto bg-surface-1 flex items-center justify-center">
              <BookOpen className="w-20 h-20 text-brand-primary/30" />
            </div>
            <CardHeader className="flex flex-col justify-center">
              <Badge variant="default" className="w-fit mb-3">
                Article Vedette
              </Badge>
              <CardTitle className="text-3xl mb-3">
                Le guide complet des assistants vocaux IA en 2024
              </CardTitle>
              <CardDescription className="text-base mb-4">
                Tout ce que vous devez savoir pour choisir, déployer et optimiser votre assistant
                vocal : technologies, cas d\'usage, ROI, et tendances.
              </CardDescription>
              <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  20 Oct 2024
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Équipe Sonoya
                </span>
                <span>15 min</span>
              </div>
              <Link
                href="#"
                className="text-brand-accent hover:text-brand-primary transition-colors flex items-center gap-2 font-medium"
              >
                Lire l'article <ArrowRight className="w-4 h-4" />
              </Link>
            </CardHeader>
          </div>
        </Card>
      </Section>

      {/* Blog Posts Grid */}
      <Section className="bg-surface-1/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Card className="h-full hover:shadow-glow transition-all cursor-pointer">
                <CardHeader>
                  <div className="aspect-video bg-surface-1 rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-brand-primary/30" />
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl mb-2 hover:text-brand-accent transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between text-xs text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link
                    href="#"
                    className="text-sm text-brand-accent hover:text-brand-primary transition-colors flex items-center gap-2 font-medium"
                  >
                    Lire la suite <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section>
        <div className="glass p-12 text-center rounded-2xl max-w-3xl mx-auto">
          <h2 className="mb-4">Restez informé</h2>
          <p className="text-xl text-text-secondary mb-6">
            Recevez nos derniers articles et insights directement dans votre inbox. 1 email / mois,
            zéro spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex h-12 w-full rounded-lg border border-border bg-surface-1 px-4 py-2 text-sm"
            />
            <button className="btn-gradient h-12 px-6 rounded-full font-semibold whitespace-nowrap">
              S'abonner
            </button>
          </div>
        </div>
      </Section>
    </>
  )
}
