import styles from './Advantages.module.css';

function Advantages() {
  return (
    <section id="advantages" className={styles.advantages}>
      <h2 className={styles.h2}>Vantagens da Consultoria Online com André Castanho</h2>
      <div className={styles.container}>
      <div className={styles.advantage}>
        <div className={styles.icon}>📱</div>
        <h3 className={styles.h3}>Plataforma Exclusiva de Treinamento</h3>
        <p className={styles.p}>
          Nossos treinos e acompanhamentos são montados dentro de um APP exclusivo, desenvolvido especialmente para os nossos clientes. Nesse aplicativo, você encontrará planos de treino personalizados, além de vídeos explicativos que mostram a execução correta de cada exercício. Isso não só maximiza seus resultados, mas também garante que você treine com segurança.
        </p>
      </div>
      <div className={styles.advantage}>
        <div className={styles.icon}>💬</div>
        <h3 className={styles.h3}>Suporte Contínuo</h3>
        <p className={styles.p}>
          Dentro do APP, você terá acesso a suporte direto de André, onde poderá tirar dúvidas e receber orientações em tempo real. Isso significa que você não estará sozinho em sua jornada; terá um acompanhamento constante para garantir que você esteja sempre no caminho certo.
        </p>
      </div>
      <div className={styles.advantage}>
        <div className={styles.icon}>📈</div>
        <h3 className={styles.h3}>Treinos Personalizados e Avaliações Regulares</h3>
        <p className={styles.p}>
          Os treinos são estruturados para progredir de acordo com o seu objetivo específico. Realizamos avaliações online com perguntas direcionadas e um acompanhamento bimestral por meio de fotos, permitindo ajustar os planos conforme necessário e garantir seu progresso constante. Isso torna seu treinamento não apenas eficaz, mas também adaptável às suas necessidades ao longo do tempo.
        </p>
      </div>
      </div>
    </section>
  );
}

export default Advantages;
