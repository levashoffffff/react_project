import logo from './../../logo.png';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />

            <div className={styles.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;