import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import AboutUs from './components/AboutUs.jsx';

function Navbar() {
  const count = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  return (
    <nav className="navbar">
      <Link className="brand" to="/">🌿 Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/about">About Us</Link>
        <Link className="cart-link" to="/cart">🛒 Cart <span className="cart-count">{count}</span></Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">GROW A LITTLE HAPPINESS</p>
        <h1>Bring nature<br />into your home.</h1>
        <p className="hero-copy">Discover beautiful, easy-care houseplants that make every space feel more alive.</p>
        <Link className="primary-button" to="/plants">Get Started</Link>
      </div>
      <div className="hero-note">A greener home starts here.</div>
    </main>
  );
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className="app-shell">
      {!isHome && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<><Navbar /><ProductList /></>} />
        <Route path="/cart" element={<><Navbar /><CartItem /></>} />
        <Route path="/about" element={<><Navbar /><AboutUs /></>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
