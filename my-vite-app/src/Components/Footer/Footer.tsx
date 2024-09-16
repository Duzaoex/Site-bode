import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imgContainer}>
        <img src="/src/Helpers/logoretangulo.png" alt="André Castanho" className={styles.photo} />
      </div>
      <div className={styles.textContainer}>
        <p>© 2024 André Castanho. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
