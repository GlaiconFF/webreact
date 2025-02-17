import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Layout from '../components/Layout';
import { CartProvider } from '../contexts/CartContext';

export function AppRoutes() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}
