import { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    img1: "src/Helpers/Antes e depois/sdasdasd.jpeg",
    img2: "src/Helpers/Antes e depois/WhatsApp Image 2024-09-14 at 06.53.58 (3).jpeg",
    text: "“O André montou um treino que me ajudou a emagrecer de forma eficiente e dentro da minha rotina. Com meu tempo curto, eu fazia só cardio. Ele adaptou os treinos e os resultados vieram!” — Danilo",
  },
  {
    img1: "/src/Helpers/Antes e depois/WhatsApp Image 2024-09-14 at 06.53.58.jpeg",
    img2: "/src/Helpers/Antes e depois/WhatsApp Image 2024-09-14 at 06.53.57 (1).jpeg",
    text: "“Me apaixonei pela musculação graças ao André. Ele me ajudou muito no início, e seus treinos sempre foram bem elaborados, fazendo toda a diferença nos meus resultados.” — Ary",
  },
  {
    img1: "src/Helpers/Antes e depois/WhatsApp Image 2024-09-14 at 06.53.58 (1).jpeg",
    text: "“Comecei a treinar por conta própria após me recuperar da Covid-19. Depois de alguns meses, procurei a ajuda do André. Ele me deu mais direcionamento e, desde então, nunca mais parei!” — Paulo",
  },
  {
    img1: "/src/Helpers/Antes e depois/WhatsApp Image 2024-09-14 at 06.53.59 (1).jpeg",
    text: "“Eu nunca levei o treino tão a sério e sempre treinava sozinho, repetindo os mesmos exercícios. Depois do acompanhamento do André, meu físico começou a se desenvolver muito mais. Ele realmente fez a diferença!” — Rafael",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  const { img1, img2, text } = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.h2}>O Que Dizem Nossos Clientes</h2>
      <div className={styles.carousel}>
        <div className={styles.testimonial}>
          <img src={img1} alt={`Cliente ${currentIndex + 1}`} />
          {img2 && <img src={img2} alt={`Cliente ${currentIndex + 1}`} />}
          <p className={styles.p}>{text}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={handlePrev} className={styles.button}>Anterior</button>
        <button onClick={handleNext} className={styles.button}>Próximo</button>
      </div>
    </section>
  );
}

export default Testimonials;
