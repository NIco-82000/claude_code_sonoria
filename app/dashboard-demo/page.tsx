'use client'

import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { BarChart3, Activity, Users, Phone, TrendingUp, Clock, CheckCircle } from 'lucide-react'

export default function DashboardDemoPage() {
  const metrics = [
    { label: 'Appels aujourd\'hui', value: '247', trend: '+12%', icon: Phone },
    { label: 'Taux de résolution', value: '89%', trend: '+3%', icon: CheckCircle },
    { label: 'Durée moyenne', value: '2m 34s', trend: '-8%', icon: Clock },
    { label: 'Satisfaction (NPS)', value: '+42', trend: '+5', icon: TrendingUp },
  ]

  const recentCalls = [
    {
      time: '14:23',
      intent: 'Prise de RDV',
      duration: '3m 12s',
      status: 'success',
      sentiment: 'positive',
    },
    {
      time: '14:18',
      intent: 'Demande d\'info',
      duration: '1m 45s',
      status: 'success',
      sentiment: 'neutral',
    },
    {
      time: '14:12',
      intent: 'Réclamation',
      duration: '5m 23s',
      status: 'escalated',
      sentiment: 'negative',
    },
    {
      time: '14:05',
      intent: 'Annulation',
      duration: '2m 01s',
      status: 'success',
      sentiment: 'neutral',
    },
  ]

  return (
    <>
      <Section className="pt-32 pb-16 bg-gradient-radial from-brand-primary/10 via-surface-0 to-surface-0">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">
            <BarChart3 className="w-3 h-3 mr-2" />
            Dashboard Demo
          </Badge>
          <h1 className="mb-6">Analytics en Temps Réel</h1>
          <p className="text-xl text-text-secondary mb-8">
            Visualisez les performances de vos assistants vocaux : métriques, appels, insights.
          </p>
        </div>
      </Section>

      {/* Metrics */}
      <Section>
        <div className="grid md:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <Card key={idx} className="hover:shadow-glow transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-3">
                  <metric.icon className="w-8 h-8 text-brand-primary" />
                  <Badge variant="success" className="text-xs">
                    {metric.trend}
                  </Badge>
                </div>
                <div className="text-3xl font-extrabold gradient-text mb-1">{metric.value}</div>
                <div className="text-sm text-text-secondary">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Charts Placeholder */}
      <Section className="bg-surface-1/30">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Volume d'appels (7 derniers jours)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-surface-1 rounded-lg">
                <Activity className="w-16 h-16 text-text-secondary/30" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Répartition des intents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-surface-1 rounded-lg">
                <BarChart3 className="w-16 h-16 text-text-secondary/30" />
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Recent Calls */}
      <Section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              Appels récents
            </CardTitle>
            <CardDescription>Suivi en temps réel des interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCalls.map((call, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-lg bg-surface-1 hover:bg-surface-1/70 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-sm font-mono text-text-secondary">{call.time}</div>
                    <div>
                      <div className="font-semibold">{call.intent}</div>
                      <div className="text-sm text-text-secondary">{call.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={
                        call.sentiment === 'positive'
                          ? 'success'
                          : call.sentiment === 'negative'
                            ? 'danger'
                            : 'secondary'
                      }
                    >
                      {call.sentiment}
                    </Badge>
                    <Badge
                      variant={call.status === 'success' ? 'success' : 'warning'}
                    >
                      {call.status === 'success' ? 'Résolu' : 'Escaladé'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Top Intents */}
      <Section className="bg-surface-1/30">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Intents (24h)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['Prise de RDV (42%)', 'Demande d\'info (28%)', 'Support technique (18%)', 'Annulation (12%)'].map(
                  (intent, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1">{intent}</div>
                        <div className="h-2 bg-surface-1 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-brand"
                            style={{ width: intent.match(/\d+/)?.[0] + '%' }}
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Langues détectées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['Français (68%)', 'Anglais (22%)', 'Espagnol (7%)', 'Allemand (3%)'].map(
                  (lang, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1">{lang}</div>
                        <div className="h-2 bg-surface-1 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-brand"
                            style={{ width: lang.match(/\d+/)?.[0] + '%' }}
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
