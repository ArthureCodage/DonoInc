import React from 'react';
import { ExternalLink, Activity } from 'lucide-react';
import { Service } from '../types/service';

interface ServiceCardProps {
  service: Service;
  onRestrictedAccess: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onRestrictedAccess }) => {
  const statusColors = {
    online: 'text-green-400',
    maintenance: 'text-yellow-400',
    offline: 'text-red-400'
  };

  const statusBgColors = {
    online: 'bg-green-400/10',
    maintenance: 'bg-yellow-400/10',
    offline: 'bg-red-400/10'
  };

  const handleVisit = () => {
    // Services avec des liens réels
    const realServices = ['UptimeDono', 'DonoCard'];
    
    if (realServices.includes(service.name)) {
      window.open(service.url, '_blank', 'noopener,noreferrer');
    } else {
      onRestrictedAccess();
    }
  };

  return (
    <div className="group bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-slate-600/50">
            <service.icon className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
              {service.name}
            </h3>
            <div className={`inline-flex items-center space-x-2 px-2 py-1 rounded-full text-xs font-medium ${statusBgColors[service.status]} ${statusColors[service.status]}`}>
              <Activity className="w-3 h-3" />
              <span className="capitalize">{service.status === 'online' ? 'En ligne' : service.status === 'maintenance' ? 'Maintenance' : 'Hors ligne'}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-slate-400 mb-6 leading-relaxed">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {service.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium border border-slate-600/50"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">
          Dernière mise à jour: {service.lastUpdate}
        </div>
        <button
          onClick={handleVisit}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
        >
          <span>Visiter</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;