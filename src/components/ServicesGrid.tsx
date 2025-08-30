import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/services';

interface ServicesGridProps {
  onRestrictedAccess: () => void;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ onRestrictedAccess }) => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nos <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Une suite complète d'outils et services web pour répondre à tous vos besoins numériques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} onRestrictedAccess={onRestrictedAccess} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;