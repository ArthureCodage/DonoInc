import { Database, Shield, BarChart3, FileText, MessageSquare, Cloud, Smartphone, Globe } from 'lucide-react';
import { Service } from '../types/service';

export const servicesData: Service[] = [
  {
    name: 'UptimeDono',
    description: 'Service de monitoring et surveillance de la disponibilité de vos sites web et services.',
    status: 'ONLINE',
    url: 'http://uptime.donohosting.com/status/main',
    icon: Cloud,
    tags: ['Monitoring', 'Uptime', 'Surveillance'],
    lastUpdate: '2 min'
  },
  {
    name: 'DonoCard',
    description: 'Générateur de cartes de visite numériques personnalisées avec design moderne et responsive.',
    status: 'ONLINE',
    url: 'https://arthurecodage.github.io/DonoCard/',
    icon: BarChart3,
    tags: ['Cartes', 'Design', 'Digital'],
    lastUpdate: '5 min'
  },
  {
    name: 'DonoJack',
    description: 'Jeu de BlackJack',
    status: 'maintenance',
    url: 'https://arthurecodage.github.io/DonoJack/',
    icon: Shield,
    tags: ['Sécurité', 'Monitoring', 'Protection'],
    lastUpdate: '1 min'
  },
  {
    name: 'DonoAPI',
    description: 'API RESTful robuste pour l\'intégration de services tiers avec documentation complète.',
    status: 'OFFLINE',
    url: 'https://api.donoinc.com',
    icon: Database,
    tags: ['API', 'Intégration', 'REST'],
    lastUpdate: '1h'
  },
  {
    name: 'DonoDocs',
    description: 'Plateforme de documentation collaborative avec versioning et recherche avancée.',
    status: 'OFFLINE',
    url: 'https://docs.donoinc.com',
    icon: FileText,
    tags: ['Documentation', 'Collaboration', 'Wiki'],
    lastUpdate: '10 min'
  },
  {
    name: 'DonoChat',
    description: 'Solution de messagerie instantanée intégrée avec support multimédia et chiffrement.',
    status: 'OFFLINE',
    url: 'https://chat.donoinc.com',
    icon: MessageSquare,
    tags: ['Chat', 'Temps réel', 'Messagerie'],
    lastUpdate: '3 min'
  },
  {
    name: 'DonoMobile',
    description: 'Application mobile companion pour gérer tous vos services DonoInc en déplacement.',
    status: 'OFFLINE',
    url: 'https://mobile.donoinc.com',
    icon: Smartphone,
    tags: ['Mobile', 'iOS', 'Android'],
    lastUpdate: '30 min'
  },
  {
    name: 'DonoPortal',
    description: 'Portail principal de gestion unifié pour administrer tous vos services et abonnements.',
    status: 'OFFLINE',
    url: 'https://portal.donoinc.com',
    icon: Globe,
    tags: ['Portail', 'Gestion', 'Admin'],
    lastUpdate: '8 min'
  }
];
