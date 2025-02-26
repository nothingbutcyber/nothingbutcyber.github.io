import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-cyan-500" />
          Trending Topics
        </h3>
        <ul className="space-y-3">
          {['Ransomware', 'Cloud Security', 'IoT Vulnerabilities', 'AI in Cybersecurity'].map((topic) => (
            <li key={topic} className="text-gray-400 hover:text-cyan-500 cursor-pointer">
              #{topic}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-cyan-500" />
          Recent Posts
        </h3>
        <ul className="space-y-4">
          {[
            'Top 10 Cybersecurity Tools in 2025',
            'How to Secure Your Home Network',
            'The Rise of AI-Powered Attacks',
            'Cybersecurity Best Practices'
          ].map((post) => (
            <li key={post} className="text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-500">
                {post}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;