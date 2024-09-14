import style from './Header.module.css';

function Header() {
    return (
        <header className={style.header}>
            <img src="/src/Helpers/logoretangulo.png" alt="André Castanho" className={style.photo}/>      
        </header>
    );
};

export default Header;