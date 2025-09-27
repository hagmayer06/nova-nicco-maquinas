import React from "react";
import "./rodapé.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Seção principal do footer */}
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>NICCO MÁQUINAS</h3>
              <p>Soluções em máquinas pesadas para construção e agricultura</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Serviços</h4>
            <ul>
              <li>Escavadeiras</li>
              <li>Retroescavadeiras</li>
              <li>Máquinas Florestais</li>
              <li>Pá-Carregadeiras</li>
              <li>Manutenção e Reparo</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <ul>
              <li>📍 Curitiba - PR</li>
              <li>📞 (41) 98888-3793</li>
              <li>✉️ niccomaquinas@gmail.com</li>
              <li>🕒 Seg-Sex: 8h às 20h</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <button className="social-link">Facebook</button>
              <button className="social-link">Instagram</button>
              <button className="social-link">WhatsApp</button>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="footer-divider"></div>

        {/* Seção inferior do footer */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 Nicco Máquinas. Todos os direitos reservados.</p>
          </div>
          <div className="footer-developer">
            <p>
              Desenvolvido com por{" "}
              <span className="developer-link">
                <strong>HagTec</strong>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
