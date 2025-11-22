import React from 'react';

const VideoIntro = () => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ring-2 ring-nicco-orange/30 hover:ring-nicco-orange/60 transition-all duration-300">
      <video
        src="/assets/video.mp4"
        className="w-full h-auto block"
        controls
        autoPlay
        muted
        loop
        playsInline
        aria-label="Vídeo de apresentação Nicco Máquinas"
      >
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
};

export default VideoIntro;
