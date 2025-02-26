import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    'nav.home': 'Back to Home',
    'nav.tutorials': 'Tutorials',
    'nav.news': 'News',
    'nav.trends': 'Trends',
    'language': 'Language',
    'article.readMore': 'Read More',
    'article.share': 'Share',
    'article.helpful': 'Helpful',
    'article.nextArticle': 'Next Article',
    'newsletter.title': 'Stay Updated',
    'newsletter.description': 'Get the latest cybersecurity news and insights delivered to your inbox.',
    'newsletter.subscribe': 'Subscribe',
    'newsletter.placeholder': 'Enter your email',
    'author.about': 'About the Author',
    'related.title': 'Related Articles',
  },
  es: {
    'nav.home': 'Volver al Inicio',
    'nav.tutorials': 'Tutoriales',
    'nav.news': 'Noticias',
    'nav.trends': 'Tendencias',
    'language': 'Idioma',
    'article.readMore': 'Leer Más',
    'article.share': 'Compartir',
    'article.helpful': 'Útil',
    'article.nextArticle': 'Siguiente Artículo',
    'newsletter.title': 'Mantente Actualizado',
    'newsletter.description': 'Recibe las últimas noticias y consejos de ciberseguridad en tu correo.',
    'newsletter.subscribe': 'Suscribirse',
    'newsletter.placeholder': 'Ingresa tu correo',
    'author.about': 'Sobre el Autor',
    'related.title': 'Artículos Relacionados',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'es') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};