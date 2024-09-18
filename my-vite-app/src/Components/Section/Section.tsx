import styles from './Section.module.css';

function Section() {


  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <div>
        <div className={styles.logo}>
          <img src="/Helpers/logo1.png" alt="André Castanho" className={styles.photo2} />
        </div>
        </div>
        <div className={styles.text}>
          <h1 className={styles.h1}>
          Potencialize seus treinos e melhore seus resultados! 
          </h1>
          <h2 className={styles.h2}>
          Treine de forma independente, mas com a qualidade de um treino personalizado.
           Junte-se a Consultoria Online. Você terá acesso exclusivo ao nosso aplicativo, que oferece todos os 
           exercícios para aprimorar sua rotina de treino. 
          </h2>
        </div>
      </div>
      <div className={styles.containerFoto}>
        <img src="/Helpers/Perfilbode-removebg-preview.png" alt="André Castanho" className={styles.photo} />
      </div>
    </section>
  );
}

export default Section;
