import React from 'react';
import { Lock, Mail, ArrowLeft } from 'lucide-react';

interface RestrictedAccessProps {
  onBack: () => void;
}

const RestrictedAccess: React.FC<RestrictedAccessProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
            <Lock className="w-8 h-8 text-red-400" />
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-4">
            Accès Restreint
          </h1>
          
          <p className="text-slate-300 mb-8 leading-relaxed">
            Ce site n'est pas disponible pour vous, veuillez contacter l'administrateur 
            pour débloquer vos accès.
          </p>
          
          <div className="space-y-4">
            <a
              href="mailto:contact@donoinc.com"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 w-full justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>Contacter l'administrateur</span>
            </a>
            
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all duration-200 w-full justify-center"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour aux services</span>
            </button>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-slate-500 text-sm">
            © 2025 DonoInc. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestrictedAccess;