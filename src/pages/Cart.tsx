// src/pages/Cart.tsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import Button from '../components/Button';
import { formatCurrency } from '../utils/format';

const Cart: React.FC = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Carrinho de Compras</h1>
        <p>Seu carrinho está vazio.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Carrinho de Compras</h1>
      <ul className="space-y-4">
        {cart.map(item => (
          <li key={item.id} className="flex items-center border-b pb-4">
            {/* Imagem do produto */}
            <div className="w-24 h-24 flex-shrink-0 mr-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Informações do produto */}
            <div className="flex-grow">
              <h2 className="font-bold text-gray-800">{item.title}</h2>
              <p className="text-gray-600">Preço: {formatCurrency(item.price)}</p>
              <p className="text-gray-600">Quantidade: {item.quantity}</p>
              <div className="flex gap-2 mt-2">
                <Button label="+" onClick={() => increaseQuantity(item.id)} />
                <Button label="-" onClick={() => decreaseQuantity(item.id)} variant="secondary" />
              </div>
            </div>
            {/* Botão de remover */}
            <div>
              <Button label="Remover" variant="secondary" onClick={() => removeFromCart(item.id)} />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">Total: {formatCurrency(total)}</h2>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <Button label="Finalizar Compra" onClick={() => alert("Compra finalizada!")} />
        <Button label="Limpar Carrinho" variant="secondary" onClick={clearCart} />
      </div>
    </div>
  );
};

export default Cart;
