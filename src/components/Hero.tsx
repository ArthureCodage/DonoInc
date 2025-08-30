import React from 'react';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              DonoInc
            </span>
            <br />
            <span className="text-slate-300">Services Web</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre écosystème de services web conçus pour offrir performance, 
            fiabilité et innovation dans chaque solution.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="#services" 
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Explorer nos services
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a 
            href="#about" 
            className="inline-flex items-center px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all duration-200"
          >
            En savoir plus
          </a>
        </div>

        {/* Features highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <Shield className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Sécurisé</h3>
            <p className="text-slate-400 text-center">
              Tous nos services respectent les standards de sécurité les plus élevés
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <Zap className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Performant</h3>
            <p className="text-slate-400 text-center">
              Optimisés pour la vitesse et l'efficacité maximale
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <Globe className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Accessible</h3>
            <p className="text-slate-400 text-center">
              Disponibles 24/7 avec une fiabilité exceptionnelle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;