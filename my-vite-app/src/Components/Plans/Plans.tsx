import styles from './plans.module.css';

function Plans() {
  return (
    <section id="plans" className={styles.plans}>
      <h2>Planos e Assinaturas</h2>
      <div className={styles.plan}>
        <h3>Plano Mensal</h3>
        <p>Acompanhamento completo por R$199/mês</p>
      </div>
      <div className={styles.plan}>
        <h3>Plano Semestral</h3>
        <p>Assinatura com desconto por R$999</p>
      </div>
    </section>
  );
}

export default Plans;
