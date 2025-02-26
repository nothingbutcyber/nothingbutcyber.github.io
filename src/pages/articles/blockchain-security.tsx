import React from 'react';
import { 
  Shield, 
  ArrowLeft, 
  Share2, 
  ThumbsUp
} from 'lucide-react';
import AdSpace from '../../components/AdSpace';
import LanguageSelector from '../../components/LanguageSelector';
import { useLanguage } from '../../contexts/LanguageContext';

const BlockchainSecurityArticle: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="sticky top-0 z-50 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a 
              href="/"
              className="flex items-center hover:text-cyan-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
                window.scrollTo(0, 0);
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
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-6">Blockchain Security Fundamentals</h1>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000"
              alt="Blockchain Security"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8 space-y-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="prose prose-invert prose-lg max-w-none">
                <h2>Core Security Features</h2>
                <ul>
                  <li>Cryptographic hash functions</li>
                  <li>Consensus mechanisms</li>
                  <li>Distributed ledger technology</li>
                  <li>Smart contract security</li>
                </ul>

                <h2>Common Security Challenges</h2>
                <p>
                  Despite its inherent security features, blockchain systems face several challenges:
                </p>

                <ul>
                  <li>51% attacks on smaller networks</li>
                  <li>Smart contract vulnerabilities</li>
                  <li>Private key management</li>
                  <li>Integration with legacy systems</li>
                </ul>

                <blockquote>
                  <p>"The security of blockchain systems relies not just on the technology itself, but on the proper 
                  implementation and maintenance of its surrounding infrastructure."</p>
                  <footer>- Blockchain Security Summit, 2025</footer>
                </blockquote>

                <h2>Best Practices</h2>
                <p>
                  To maintain the security of blockchain implementations, organizations should:
                </p>

                <ul>
                  <li>Conduct regular security audits</li>
                  <li>Implement secure key management solutions</li>
                  <li>Monitor network activity for anomalies</li>
                  <li>Keep smart contract code simple and verified</li>
                </ul>

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

          <aside className="lg:col-span-4 space-y-8">
            <AdSpace className="sticky top-24" type="vertical" />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlockchainSecurityArticle;