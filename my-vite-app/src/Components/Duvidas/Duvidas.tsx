import styles from './Duvidas.module.css';

function Duvidas() {
  const perguntas = [
    "Como vou saber quais treinos são adequados para o meu nível?",
    "E se eu tiver dúvidas sobre os treinos?",
    "Posso conseguir resultados apenas treinando sozinho?",
    "Vou precisar de equipamentos especiais?",
    "Como posso manter minha motivação durante o programa?",
    "O que fazer se eu não estiver vendo resultados?"
  ];

  return (
    <section id="duvidas" className={styles.duvidasSection}>
      <h2>Dúvidas</h2>
      <p className={styles.intro}>
        Se você já fez algumas dessas perguntas, saiba que não está sozinho na sua jornada! 🤔💭
      </p>
      <div className={styles.gridContainer}>
        {perguntas.map((pergunta, index) => (
          <div key={index} className={styles.pergunta}>
            <p>{pergunta}</p>
          </div>
        ))}
      </div>
      <p className={styles.finalMessage}>
        O Programa André Castanho foi criado para responder a todas essas dúvidas e oferecer um caminho claro e eficiente para transformar não apenas seu corpo, mas também sua vida. 🌈
      </p>
      <p className={styles.finalMessage}>
        Utilizando os conhecimentos e práticas desenvolvidos ao longo de mais de 10 anos de experiência, André e sua equipe te ensinarão a otimizar seus treinos, alimentação e hábitos, garantindo resultados notáveis e duradouros! 💪✨ Prepare-se para a sua transformação! 🚀
      </p>
    </section>
  );
}

export default Duvidas;
