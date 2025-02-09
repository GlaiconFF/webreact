// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-extrabold text-green-800 mb-4">Sobre a Tree Lakes Store</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Bem-vindo à <span className="font-semibold text-green-700">Tree Lakes Store</span>, sua loja online de produtos variados! Nosso objetivo é oferecer a melhor experiência de compra, trazendo produtos de qualidade, preços acessíveis e um atendimento excepcional.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">O que oferecemos?</h2>
          <ul className="list-none mt-2 space-y-2 text-lg text-gray-600">
            <li>✅ Uma ampla variedade de produtos de diferentes categorias.</li>
            <li>✅ Interface simples e intuitiva para facilitar sua navegação.</li>
            <li>✅ Atualizações constantes para trazer novidades e melhores ofertas.</li>
          </ul>
        </div>
        <p className="mt-6 text-gray-700 text-lg">
          Nosso compromisso é proporcionar praticidade e confiança na sua compra online. Obrigado por escolher a <span className="font-semibold text-green-700">Tree Lakes Store</span>! 🚀  
        </p>
      </div>
    </div>
  );
};

export default About;
