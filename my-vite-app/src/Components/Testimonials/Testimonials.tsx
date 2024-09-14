import styles from './Testimonials.module.css';

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>O Que Dizem Nossos Clientes</h2>
      <div className={styles.testimonial}>
        <img src="/src/Helpers/Antes e depois/WhatsApp Image 2024-09-14 at 06.53.58.jpeg" alt="Cliente 1" />
        <img src="/src/Helpers/Antes e depois/WhatsApp Image 2024-09-14 at 06.53.57 (1).jpeg" alt="Cliente 11" />
        <img src="/src/Helpers/Antes e depois/WhatsApp Image 2024-09-14 at 06.53.57 (2).jpeg" alt="Cliente 111" />
        <p>"Os treinos do André transformaram minha vida. Estou mais saudável e confiante!"</p>
      </div>
      <div className={styles.testimonial}>
        <img src="/src/Helpers/Antes e depois/WhatsApp Image 2024-09-14 at 06.53.59 (1).jpeg" alt="Cliente 2" />
        <p>"O acompanhamento e a personalização dos treinos fazem toda a diferença!"</p>
      </div>
    </section>
  );
}

export default Testimonials;
