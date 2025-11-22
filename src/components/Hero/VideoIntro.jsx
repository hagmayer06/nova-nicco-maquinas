import React from 'react';

const VideoIntro = () => {
  return (
    <div className="w-full max-w-[600px] lg:max-w-[700px] flex justify-center items-center rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <video
        src="/assets/video.mp4"
        className="w-full h-auto block rounded-xl"
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
