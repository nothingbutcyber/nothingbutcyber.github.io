import React from 'react';

interface AdSpaceProps {
  className?: string;
  type: 'horizontal' | 'vertical';
}

const AdSpace: React.FC<AdSpaceProps> = ({ className = '', type }) => {
  const dimensions = type === 'horizontal' 
    ? 'h-[90px] w-full' 
    : 'h-[600px] w-full';

  return (
    <div className={`bg-gray-800 rounded-lg ${dimensions} ${className}`}>
      <div className="h-full w-full flex items-center justify-center border-2 border-dashed border-gray-700 rounded-lg">
        <p className="text-gray-500 text-sm">Advertisement Space</p>
      </div>
    </div>
  );
};

export default AdSpace;