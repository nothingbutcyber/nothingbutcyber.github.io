import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, image, slug }) => {
  const { t } = useLanguage();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = slug;
    window.scrollTo(0, 0);
  };
  
  return (
    <article className="bg-gray-800 rounded-lg overflow-hidden">
      <img 
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <a 
          href={`#${slug}`}
          onClick={handleClick}
          className="inline-block hover:text-cyan-500 transition-colors"
        >
          <h3 className="text-xl font-bold mb-3">{title}</h3>
        </a>
        <p className="text-gray-400 mb-4">{excerpt}</p>
        <a 
          href={`#${slug}`}
          onClick={handleClick}
          className="inline-flex items-center text-cyan-500 hover:text-cyan-400"
        >
          {t('article.readMore')} <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </article>
  );
};

export default BlogPost;