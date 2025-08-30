import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Service {
  name: string;
  description: string;
  status: 'online' | 'maintenance' | 'offline';
  url: string;
  icon: LucideIcon;
  tags: string[];
  lastUpdate: string;
}