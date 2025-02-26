import React from 'react';
import { 
  Shield, 
  ArrowLeft, 
  Calendar,
  Share2, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Bookmark,
  ThumbsUp
} from 'lucide-react';
import AdSpace from '../components/AdSpace';
import LanguageSelector from '../components/LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

interface ArticleProps {
  slug: string;
}

const Article: React.FC<ArticleProps> = ({ slug }) => {
  const { t } = useLanguage();
  const readingTime = "8 min read";

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a 
              href="#" 
              className="flex items-center hover:text-cyan-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
              }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t('nav.home')}
            </a>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-cyan-500" />
                <span className="ml-2 text-xl font-bold">NothingButCyber</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8 space-y-8">
            {/* Article content */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="prose prose-invert prose-lg max-w-none">
                <h2>Introduction</h2>
                <p>
                  Cybersecurity threats continue to evolve at a rapid pace, with attackers using sophisticated techniques to exploit vulnerabilities. 
                  Staying informed about the latest threats is crucial for individuals and organizations to protect sensitive data and systems. 
                  This article explores some of the most pressing cybersecurity threats in 2024 and how you can mitigate them.
                </p>

                <h2>1. Ransomware-as-a-Service (RaaS)</h2>
                <p>
                  Ransomware remains a top threat, but a new trend has emerged: Ransomware-as-a-Service (RaaS). 
                  Cybercriminals are now selling or renting ransomware kits to less experienced hackers, making it easier for anyone to launch attacks. 
                  These attacks often target critical infrastructure, healthcare institutions, and financial organizations.
                </p>

                <h3>How to Protect Yourself:</h3>
                <ul>
                  <li>Implement regular data backups and store them offline.</li>
                  <li>Use endpoint detection and response (EDR) solutions.</li>
                  <li>Educate employees on phishing attempts and social engineering tactics.</li>
                </ul>

                <h2>2. AI-Powered Cyberattacks</h2>
                <p>
                  Artificial intelligence (AI) is being leveraged by both security professionals and hackers. 
                  AI-powered malware and deepfake scams are becoming increasingly sophisticated, making it harder to distinguish legitimate communications from malicious ones.
                </p>

                <h3>How to Protect Yourself:</h3>
                <ul>
                  <li>Deploy AI-driven security solutions to detect anomalies.</li>
                  <li>Implement multi-factor authentication (MFA) to prevent unauthorized access.</li>
                  <li>Regularly update security protocols to counter evolving threats.</li>
                </ul>

                <blockquote>
                  <p>"The cybersecurity landscape is constantly evolving, and organizations must stay vigilant to protect against emerging threats."</p>
                  <footer>- Cybersecurity Expert Panel, 2025</footer>
                </blockquote>

                <figure>
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000" 
                    alt="Cybersecurity Protection"
                    className="rounded-lg"
                  />
                  <figcaption className="text-center text-gray-400 mt-2">
                    Modern cybersecurity requires a multi-layered approach to protection
                  </figcaption>
                </figure>

                {/* Social sharing buttons */}
                <div className="flex justify-center gap-4 my-8">
                  <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <AdSpace className="sticky top-24" type="vertical" />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Article;