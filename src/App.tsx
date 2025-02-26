import React, { useEffect, useState } from 'react';
import { Shield, Terminal, Newspaper, TrendingUp, ExternalLink, Search, Menu } from 'lucide-react';
import AdSpace from './components/AdSpace';
import BlogPost from './components/BlogPost';
import Sidebar from './components/Sidebar';
import LatestThreatsArticle from './pages/articles/latest-threats';
import ZeroDayExploitsArticle from './pages/articles/zero-day-exploits';
import BlockchainSecurityArticle from './pages/articles/blockchain-security';
import LanguageSelector from './components/LanguageSelector';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { t } = useLanguage();
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleFeaturedArticleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = 'latest-threats';
    window.scrollTo(0, 0);
  };

  // Route to the appropriate article based on the hash
  switch (currentHash) {
    case '#latest-threats':
      return <LatestThreatsArticle />;
    case '#zero-day-exploits':
      return <ZeroDayExploitsArticle />;
    case '#blockchain-security':
      return <BlockchainSecurityArticle />;
    default:
      return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
          {/* Navigation */}
          <nav className="bg-gray-800 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <Shield className="w-8 h-8 text-cyan-500" />
                  <span className="ml-2 text-xl font-bold">NothingButCyber</span>
                </div>
                
                <div className="hidden md:flex items-center space-x-4">
                  <a href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
                    <Terminal className="w-4 h-4 mr-2" />
                    {t('nav.tutorials')}
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
                    <Newspaper className="w-4 h-4 mr-2" />
                    {t('nav.news')}
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {t('nav.trends')}
                  </a>
                  <LanguageSelector />
                </div>
                
                <div className="md:hidden">
                  <Menu className="w-6 h-6" />
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                {/* Featured Post */}
                <div className="mb-8">
                  <article className="bg-gray-800 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
                      alt="Cybersecurity"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <a 
                        href="#latest-threats" 
                        onClick={handleFeaturedArticleClick}
                        className="inline-block hover:text-cyan-500 transition-colors"
                      >
                        <h2 className="text-2xl font-bold mb-4">Latest Threats in Cybersecurity: What You Need to Know</h2>
                      </a>
                      <p className="text-gray-400 mb-4">Stay informed about the most recent cybersecurity threats and how to protect yourself against them...</p>
                      <a 
                        href="#latest-threats" 
                        onClick={handleFeaturedArticleClick}
                        className="inline-flex items-center text-cyan-500 hover:text-cyan-400"
                      >
                        {t('article.readMore')} <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </article>
                  <AdSpace className="mt-8" type="horizontal" />
                </div>

                {/* Recent Posts */}
                <div className="grid gap-8">
                  <BlogPost 
                    title="Understanding Zero-Day Exploits"
                    excerpt="An in-depth look at zero-day vulnerabilities and their impact on cybersecurity..."
                    image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
                    slug="zero-day-exploits"
                  />
                  <BlogPost 
                    title="Blockchain Security Fundamentals"
                    excerpt="Learn the basics of blockchain security and how to protect your digital assets..."
                    image="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000"
                    slug="blockchain-security"
                  />
                  <AdSpace className="mt-4" type="horizontal" />
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-8">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center space-x-2 bg-gray-700 rounded-lg p-2">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input 
                      type="search"
                      placeholder="Search articles..."
                      className="bg-transparent border-none focus:outline-none text-gray-100 w-full"
                    />
                  </div>
                </div>
                
                <Sidebar />
                <AdSpace className="sticky top-4" type="vertical" />
              </aside>
            </div>
          </main>
        </div>
      );
  }
}

export default App;