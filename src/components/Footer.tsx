import React from 'react';
import { Mail, Github, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-800/80 border-t border-slate-700/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                DonoInc
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Créateur de solutions web innovantes et fiables pour accompagner 
              votre transformation digitale.
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors duration-200">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact et réseaux sociaux */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 mb-6">
              <a 
                href="mailto:contact@donoinc.com" 
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>contact@donoinc.com</span>
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/donoinc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Github className="w-5 h-5 text-slate-300" />
              </a>
              <a 
                href="https://linkedin.com/company/donoinc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-slate-300" />
              </a>
              <a 
                href="https://twitter.com/donoinc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Twitter className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © 2025 DonoInc. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
              Mentions légales
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;