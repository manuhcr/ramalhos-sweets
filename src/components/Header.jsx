import Logo from '../assets/logo ramalho´s sweets.png';
import '../Navbar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lógica de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="navbar" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className={`nav-links ${open ? "active" : ""}`}>
        <div className="link">
          <Link to="/" className="links">Home</Link>
        </div>
        <div className="link">
          <Link to="/encomendas" className="links">Encomendas</Link>
        </div>
        <div className="logomarca">
          <img className='logo' src={Logo} alt="Logomarca Ramalho's Sweets" />
        </div>
        <div className="link">
          <Link to="/feedback" className="links">Feedback</Link>
        </div>
        <div className="link">
          <Link to="/melhoresdoces" className="links">Melhores Doces</Link>
        </div>
      </nav>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <span className="menu-icon open">{"\u2715"}</span> : <span className="menu-icon close">{"\u2630"}</span>}
      </button>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </header>
  );
}

