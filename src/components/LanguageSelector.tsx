import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
        aria-label={t('language')}
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{language}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 hidden group-hover:block">
        <button
          onClick={() => setLanguage('en')}
          className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-700 ${
            language === 'en' ? 'text-cyan-500' : 'text-gray-300'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-700 ${
            language === 'es' ? 'text-cyan-500' : 'text-gray-300'
          }`}
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;