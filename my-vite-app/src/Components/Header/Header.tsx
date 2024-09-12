import style from './Header.module.css';
function Header() {
    return (
        <header className={style.header}>
            <div className={style.headerText}>
            <h1 className={style.text}>nome do site</h1>
            </div>
        </header>
    );
};

export default Header;