// src/components/VideoSection.tsx
import React from 'react';
import style from './Video.module.css';

const VideoSection: React.FC = () => {
  return (
    <section className={style.section}>
        <div>
      <h2 className={style.h2}>Aplicativo</h2>
      <div className={style.videoContainer}>
        <iframe
          src="public/Helpers/WhatsApp Video 2024-09-25 at 05.37.31.mp4"
          title="Embedded Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
        </div>
    </section>
  );
};

export default VideoSection;
