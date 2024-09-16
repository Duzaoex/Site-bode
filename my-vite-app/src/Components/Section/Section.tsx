import styles from './Section.module.css';

function Section() {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Seção de planos não encontrada');
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <div className={styles.logo}>
          <img src="/src/Helpers/logo1.png" alt="André Castanho" className={styles.photo2} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.h1}>
          🌟 Potencialize seus treinos e melhore seus resultados! 
          </h1>
          <h2 className={styles.h2}>
          💪 Treine de forma independente, mas com a qualidade de um treino personalizado.

Junte-se a André Castanho! Com mais de 10 anos de experiência na prática, você terá acesso exclusivo ao nosso aplicativo, que oferece todos os exercícios para aprimorar sua rotina de treino. 
          </h2>
        </div>
        <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={scrollToPlans}>Veja Nossos Planos</button>
      </div>
      </div>
      <div className={styles.containerFoto}>
        <img src="/src/Helpers/Perfilbode-removebg-preview.png" alt="André Castanho" className={styles.photo} />
      </div>
    </section>
  );
}

export default Section;
