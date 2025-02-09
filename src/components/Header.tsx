// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tlstoree.png';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>
        <nav className="flex items-center space-x-6">
          <Link to="/products" className="text-gray-600 hover:text-gray-800 transition">Produtos</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800 transition">Sobre</Link>
          <Link to="/cart" className="relative text-gray-600 hover:text-gray-800 transition">
            Carrinho
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-1">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
