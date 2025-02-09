// src/pages/Home.tsx
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useFetchProducts } from '../hooks/useFetchProducts';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/format';

const Home: React.FC = () => {
  const { products, loading, error } = useFetchProducts();
  const { addToCart } = useCart();
  
  // Exibe os 4 primeiros produtos como destaque
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Bem-vindo à Tree Lakes Store</h1>
        <p className="mt-4 text-lg text-gray-600">Confira nossos produtos em destaque.</p>
      </div>

      {loading && <p className="text-center text-gray-600">Carregando produtos...</p>}
      {error && <p className="text-center text-red-500">Erro: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featuredProducts.map(product => (
          <Card 
            key={product.id}
            title={product.title}
            description={formatCurrency(product.price)}
            imageUrl={product.image}
          >
            <Button label="Adicionar ao Carrinho" onClick={() => addToCart(product)} />
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/products" className="text-blue-600 hover:underline">
          Ver todos os produtos
        </Link>
      </div>
    </div>
  );
};

export default Home;
