import styles from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

export default Message;