import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? styles.active : undefined}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? styles.active : undefined}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="#">News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="#">Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="#">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;