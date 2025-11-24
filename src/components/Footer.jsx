
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo ramalho´s sweets.png'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave-container">
        <svg
          className="footer-wave"
          xmlns="www.w3.org"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#673f2f"
            fillOpacity="1"
            d="M0,256
            C60,224,120,160,180,160
            C240,160,300,224,360,208
            C420,192,480,96,540,112
            C600,128,660,224,720,208
            C780,192,840,96,900,112
            C960,128,1020,224,1080,208
            C1140,192,1200,96,1260,112
            C1320,128,1380,224,1440,208
            L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="conteudo">
        <a href="./encomendas.html">
          <p className="contatofooter">Quer encomendar?</p>
        </a>
        <p className="contatofooter">Rua dos Doces, 123 - Cidade Açucarada</p>
        <p className="contatofooter">Quer mandar um feedback?</p>
        <p className="contatofooter">contato@ramalhossweets.com</p>
      </div>

      <div className="social-icons">
        <div className="logomarcafooter">
          {/* Você ainda precisará da imagem do logo da marca */}
          <img
            className="logofooter"
            width="100"
            src ={logo}
            alt="Logo Ramalho's Sweets"
          />
        </div>
        
        {/* Substituição das imagens por ícones: */}
        <a href="instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icone" /> Instagram
        </a>
        <a href="facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icone" /> Facebook
        </a>
        <a href="wa.me" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icone" /> WhatsApp
        </a>
      </div>
    </footer>
  );
}

export default Footer;