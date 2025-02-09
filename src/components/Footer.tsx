// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 border-t border-gray-200 py-4">
      <div className="container mx-auto text-center text-sm text-white">
        &copy; {new Date().getFullYear()} Tree Lakes Store. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
