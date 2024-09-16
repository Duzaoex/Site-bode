import style from './Header.module.css';

function Header() {
    return (
        <header className={style.header}>
            <img src="/src/Helpers/logoretangulo.png" alt="André Castanho" className={style.photo}/>      
            <img src="/src/Helpers/instagram-new.png" alt="logo-insta" className={style.photo2}/>   
            <h1 className={style.h1}>@a.castanhotreinador</h1> 
        </header>
    );
};

export default Header;