import styles from './TrainerBio.module.css';

function TrainerBio() {
  return (
    <section id="about" className={styles.bio}>
      <h2>Quem é André Castanho?</h2>
      <img src="src/Helpers/Perfilbode.jpeg" alt="André Castanho" className={styles.photo} />
      <p>André é um profissional com mais de 10 anos de experiência na área de musculação...</p>
    </section>
  );
}

export default TrainerBio;
