import styles from './Friends.module.css';
import { NavLink } from 'react-router-dom';

const FriendsItem = (props) => {
    return (
        <div class={styles["friends-item"]}>
            <div class={styles.circle}></div>
            <div class={styles["friends-name"]}>
                {props.name}
            </div>
        </div>
    )
}

const Friends = (props) => {
    {/*Преобразуем массив объектов в массив jsx элементов dialog */}
    let friendsElement = props.name.map( (friends) => {
        return (
            <FriendsItem name={friends.name} />
        )
    });

    return (
            <div className={styles["friends-content"]}>
                <NavLink to="/friends">Friends</NavLink>

                <div className={styles.friends}>
                    {friendsElement}
                </div>

            </div>
    )
}

export default Friends;