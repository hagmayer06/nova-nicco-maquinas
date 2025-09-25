// Footer.js
import React from 'react';
import './rodapé.css'; // Não se esqueça de importar o CSS!

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Siga-nos</h4>
          {/* Use ícones ou links de texto simples por enquanto */}
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nicco Máquinas . Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;