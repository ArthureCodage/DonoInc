import { Database, Shield, BarChart3, FileText, MessageSquare, Cloud, Smartphone, Globe } from 'lucide-react';
import { Service } from '../types/service';

export const servicesData: Service[] = [
  {
    name: 'DonoCloud',
    description: 'Solution de stockage cloud sécurisée avec synchronisation multi-appareils et partage collaboratif.',
    status: 'online',
    url: 'https://cloud.donoinc.com',
    icon: Cloud,
    tags: ['Stockage', 'Collaboration', 'Sécurité'],
    lastUpdate: '2 min'
  },
  {
    name: 'DonoAnalytics',
    description: 'Plateforme d\'analyse web avancée avec tableaux de bord en temps réel et insights détaillés.',
    status: 'online',
    url: 'https://analytics.donoinc.com',
    icon: BarChart3,
    tags: ['Analytics', 'Dashboard', 'Reporting'],
    lastUpdate: '5 min'
  },
  {
    name: 'DonoSecure',
    description: 'Service de monitoring de sécurité et protection contre les menaces pour vos applications web.',
    status: 'online',
    url: 'https://secure.donoinc.com',
    icon: Shield,
    tags: ['Sécurité', 'Monitoring', 'Protection'],
    lastUpdate: '1 min'
  },
  {
    name: 'DonoAPI',
    description: 'API RESTful robuste pour l\'intégration de services tiers avec documentation complète.',
    status: 'maintenance',
    url: 'https://api.donoinc.com',
    icon: Database,
    tags: ['API', 'Intégration', 'REST'],
    lastUpdate: '1h'
  },
  {
    name: 'DonoDocs',
    description: 'Plateforme de documentation collaborative avec versioning et recherche avancée.',
    status: 'online',
    url: 'https://docs.donoinc.com',
    icon: FileText,
    tags: ['Documentation', 'Collaboration', 'Wiki'],
    lastUpdate: '10 min'
  },
  {
    name: 'DonoChat',
    description: 'Solution de messagerie instantanée intégrée avec support multimédia et chiffrement.',
    status: 'online',
    url: 'https://chat.donoinc.com',
    icon: MessageSquare,
    tags: ['Chat', 'Temps réel', 'Messagerie'],
    lastUpdate: '3 min'
  },
  {
    name: 'DonoMobile',
    description: 'Application mobile companion pour gérer tous vos services DonoInc en déplacement.',
    status: 'online',
    url: 'https://mobile.donoinc.com',
    icon: Smartphone,
    tags: ['Mobile', 'iOS', 'Android'],
    lastUpdate: '30 min'
  },
  {
    name: 'DonoPortal',
    description: 'Portail principal de gestion unifié pour administrer tous vos services et abonnements.',
    status: 'online',
    url: 'https://portal.donoinc.com',
    icon: Globe,
    tags: ['Portail', 'Gestion', 'Admin'],
    lastUpdate: '8 min'
  }
];