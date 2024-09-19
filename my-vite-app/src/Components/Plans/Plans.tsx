import styles from "./plans.module.css";

function Plans() {

  return (
    <section id='plans' className={styles.plans}>
      <div className={styles.plan}>
        <h3 className={styles.h3}>Acompanhamento Trimestral (03 Meses)</h3>
        <div className={styles.features}>
          <h4>Vantagens desse Plano:</h4>
          <ul>
            <li>✔ Exercícios no app exclusivo para facilitar a visualização e execução durante o treino.</li>
            <li>✔ Atualização mensal de fotos dentro do app para acompanhar seu progresso.</li>
            <li>✔ Chat direto no app para esclarecer suas dúvidas.</li>
          </ul>
          <h4>Montagem do Treino Individualizada:</h4>
          <ul>
            <li>✔ Planejamento personalizado para atender suas necessidades específicas.</li>
            <li>✔ Estratégia individualizada para alcançar seus objetivos.</li>
            <li>✔ 2 treinos: um inicial e uma troca após 60 dias.</li>
          </ul>
        </div>
        <div className={styles.pricing}>
          <p>De: <span className={styles.strike}>R$ 650,00</span></p>
          <p>Por: <strong>3x de R$ 145,95</strong></p>
        </div>
        <a href="https://pay.hotmart.com/Y95137460T?off=zr3r0oqv&checkoutMode=6&bid=1726375402989" className={styles.button}>
          Contratar esse plano
        </a>
      </div>

      <div className={styles.plan}>
        <h3 className={styles.h3}>Acompanhamento Semestral (06 Meses)</h3>
        <div className={styles.features}>
          <h4>Vantagens desse Plano:</h4>
          <ul>
            <li>✔ Exercícios no app exclusivo para facilitar a visualização e execução durante o treino.</li>
            <li>✔ Atualização mensal de fotos dentro do app para acompanhar seu progresso.</li>
            <li>✔ Chat direto no app para esclarecer suas dúvidas.</li>
          </ul>
          <h4>Montagem do Treino Individualizada:</h4>
          <ul>
            <li>✔ Planejamento personalizado para atender suas necessidades específicas.</li>
            <li>✔ Estratégia individualizada para alcançar seus objetivos.</li>
            <li>✔ 3 treinos: com duas trocas ao longo do período.</li>
          </ul>
        </div>
        <div className={styles.pricing}>
          <p>De: <span className={styles.strike}>R$ 1.200,00</span></p>
          <p>Por: <strong>6x de R$ 180,25</strong></p>
        </div>
        <a href="https://pay.hotmart.com/Y95137460T?off=chcs1bic&checkoutMode=6&bid=1726375381547" className={styles.button}>
          Contratar esse plano
        </a>
      </div>

      <div className={styles.plan}>
        <h3 className={styles.h3}>Acompanhamento Anual (12 Meses)</h3>
        <div className={styles.features}>
          <h4>Vantagens desse Plano:</h4>
          <ul>
            <li>✔ Exercícios no app exclusivo para facilitar a visualização e execução durante o treino.</li>
            <li>✔ Atualização mensal de fotos dentro do app para acompanhar seu progresso.</li>
            <li>✔ Chat direto no app para esclarecer suas dúvidas.</li>
          </ul>
          <h4>Montagem do Treino Individualizada:</h4>
          <ul>
            <li>✔ Planejamento personalizado para atender suas necessidades específicas.</li>
            <li>✔ Estratégia individualizada para alcançar seus objetivos.</li>
            <li>✔ 4 treinos: com três trocas ao longo do ano.</li>
          </ul>
        </div>
        <div className={styles.pricing}>
          <p>De: <span className={styles.strike}>R$ 2.100,00</span></p>
          <p>Por: <strong>12x de R$ 167,55</strong></p>
        </div>
        <a href="https://pay.hotmart.com/Y95137460T?off=lt9tkr5o&checkoutMode=6&bid=1724633108880" className={styles.button}>
          Contratar esse plano
        </a>
      </div>
    </section>
  );
}

export default Plans;
