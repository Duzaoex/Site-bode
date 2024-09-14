import styles from './Section.module.css';

function Section() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <div className={styles.logo}>
        <img src="/src/Helpers/logo1.png" alt="André Castanho" className={styles.photo2}/>    
        </div>
        <div className={styles.text}>
        <h2 className={styles.h2}>você está no lugar certo! Sou o André e, há Mais de 10 anos,<br/><br/>ajudo pesoas a transformarem suas vidas!</h2> 
        </div>
      </div>

      <div className={styles.containerFoto}>
        <img src="/src/Helpers/Perfilbode-removebg-preview.png" alt="André Castanho" className={styles.photo} />
      </div>
    </section>
  );
}

export default Section;
