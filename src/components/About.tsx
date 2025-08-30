import React from 'react';
import { Code, Users, Target, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projets réalisés', value: '25+' },
    { icon: Users, label: 'Clients satisfaits', value: '15+' },
    { icon: Target, label: 'Services actifs', value: '8' },
    { icon: Award, label: 'Années d\'expérience', value: '5+' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            À propos de <span className="text-blue-400">DonoInc</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            DonoInc est une entreprise spécialisée dans le développement et la maintenance 
            de solutions web innovantes. Nous créons des services fiables, performants et 
            sécurisés pour accompagner vos projets digitaux.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Notre Mission
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Chez DonoInc, nous nous engageons à fournir des solutions web de haute qualité 
              qui permettent à nos clients de se concentrer sur leur cœur de métier. 
              Chaque service que nous développons est pensé pour être intuitif, robuste et évolutif.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/30">
                <h4 className="font-semibold text-white mb-3">Innovation</h4>
                <p className="text-slate-400 text-sm">
                  Nous adoptons les dernières technologies pour créer des solutions modernes et efficaces.
                </p>
              </div>
              <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/30">
                <h4 className="font-semibold text-white mb-3">Fiabilité</h4>
                <p className="text-slate-400 text-sm">
                  Nos services sont conçus pour une disponibilité maximale avec monitoring continu.
                </p>
              </div>
              <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/30">
                <h4 className="font-semibold text-white mb-3">Support</h4>
                <p className="text-slate-400 text-sm">
                  Nous accompagnons nos clients avec un support technique réactif et expert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;