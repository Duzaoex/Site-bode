import { useState } from 'react';
import styles from './Faq.module.css';

function Faq() {
  // Estado para controlar quais perguntas estão abertas
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Função para alternar a abertura/fechamento da pergunta clicada
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "+ O curso é adequado para iniciantes?",
      answer:
        "Sim, o  André Castanho projetou para atender tanto iniciantesb quanto pessoas mais experientes. Todas as aulas são estruturadas de forma a serem compreensíveis e práticas para todos os níveis de condicionamento físico."
    },
    {
      question: "+ Quanto tempo devo dedicar ao treino diariamente?",
      answer:
        "Não é necessário ter equipamentos específicos para começar. No entanto, para obter melhores resultados, é recomendado ter acesso a pesos livres e alguns equipamentos básicos de academia."
    },
    {
      question: "+ Preciso de equipamentos específicos?",
      answer:
        "Não é necessário ter equipamentos específicos para começar. No entanto, para obter melhores resultados, é recomendado ter acesso a pesos livres e alguns equipamentos básicos de academia."
    },
    {
      question: "+ Como funciona a garantia de 7 dias?",
      answer:
        "Oferecemos uma garantia de satisfação de 7 dias. Se, por qualquer motivo, você não estiver satisfeito com o curso, pode solicitar o reembolso total dentro desse período."
    },
    {
      question: "+ Para quem o Plano Muzy é indicado?",
      answer:
        "O  André Castanho indica para qualquer pessoa que deseja melhorar sua saúde e desempenho físico, seja você um iniciante ou um atleta avançado."
    },
    {
      question: "+ Após realizar a compra, o que eu vou receber?",
      answer:
        "Após a compra, você receberá acesso imediato à plataforma do curso, onde poderá acessar todas as videoaulas, planos de treino, orientações nutricionais e muito mais."
    },
    {
      question: "+ Eu já treino na academia. Os programas servem para mim?",
      answer:
        "Sim,  André Castanho projetou para complementar e otimizar seu treino atual, oferecendo técnicas e estratégias avançadas para maximizar seus resultados."
    },
    {
      question: "+ Quanto tempo eu tenho acesso ao aplicativo?",
      answer:
        "Você terá acesso ao aplicativo e a todo o conteúdo do curso por um período de 12 meses, com atualizações regulares."
    },
    {
      question: "+ Quais as formas de pagamento?",
      answer: "Cartão de crédito em até 12x ou Pix à vista."
    }
  ];

  return (
    <section id="faq" className={styles.faqSection}>
      <h2>Perguntas Frequentes</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div className={styles.question} onClick={() => toggleFaq(index)}>
            <h3>{faq.question}</h3>
            <button className={styles.toggleButton}>
              {openIndex === index ? '-' : '+'}
            </button>
          </div>
          {openIndex === index && <p className={styles.answer}>{faq.answer}</p>}
        </div>
      ))}
      <a href="#contratar" className={styles.ctaButton}>
        Não Tenho Mais Dúvidas! Bora!
      </a>
    </section>
  );
}

export default Faq;
