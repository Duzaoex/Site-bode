import styles from './TrainerBio.module.css';

function TrainerBio() {
  return (
    <section id="about" className={styles.bio}>
      <h2 className={styles.h2}>Quem é André Castanho?</h2>
      <img src="/Helpers/Perfilbode.jpeg" alt="André Castanho" className={styles.photo} />
      <p className={styles.p}>" André Castanho é especialista em musculação, com mais de 10 anos de experiência. 
        Pós-graduado em Fisiologia do Exercício e especializado em Prescrição de Treinamento, 
        ele oferece um conhecimento profundo sobre o impacto do exercício no corpo. Atualmente, 
        cursa Nutrição, ampliando sua abordagem integrada para o bem-estar de seus clientes. "</p>
    </section>
  );
}

export default TrainerBio;
