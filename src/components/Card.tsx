// src/components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 p-4 flex flex-col items-center text-center">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-40 object-contain mb-4" 
        />
      )}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {children && <div className="mt-auto">{children}</div>}
    </div>
  );
};

export default Card;
