import React from 'react';
import './VideoIntro.css'

function VideoIntro() {
  // O vídeo foi colocado na pasta 'public'
  const videoSource = '/assets/video.mp4'; 
  
  return (
    <div className="video-container">
      <video 
        // 1. O caminho do arquivo (dentro da pasta public)
        src={videoSource} 
        
        // 2. Torna o vídeo mais interativo ou automático
        controls // Permite que o usuário pause, mude o volume, etc.
        autoPlay // Tenta iniciar o vídeo automaticamente (pode ser bloqueado)
        muted // ESSENCIAL para que o 'autoplay' funcione na maioria dos navegadores
        loop // Faz o vídeo rodar em ciclo
        width="100%" // Garante que ocupe a largura total do container
      >
        {/* Fallback para navegadores antigos */}
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
}

export default VideoIntro;