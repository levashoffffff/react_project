import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import Friends from './Friends/Friends';

const Navbar = (props) => {
    return (
            <nav className={styles.nav}>
                <div className={styles.item}>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? styles.active : undefined}>Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/dialogs" className={({ isActive }) => isActive ? styles.active : undefined}>Messages</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/users" className={({ isActive }) => isActive ? styles.active : undefined}>Users</NavLink>
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

                <Friends name={props.state.friends} />

            </nav>
    )

}

export default Navbar;