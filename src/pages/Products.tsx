// src/pages/Products.tsx
import React, { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import { getProducts } from '../services/api';
import { useCart } from '../contexts/CartContext';
import Button from '../components/Button';
import { formatCurrency } from '../utils/format';


const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await getProducts();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded p-4 flex flex-col">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-2"
            />
            <h2 className="font-bold text-lg">{product.title}</h2>
            <p className="text-gray-600">{formatCurrency(product.price)}</p>
            <div className="mt-auto">
              <Button label="Adicionar ao Carrinho" onClick={() => addToCart(product)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
