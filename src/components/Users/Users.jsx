import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {

    //Вычисляем кол-во страниц как отношение Всего пользователей к Количеству пользователей на странице
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    //Наполняем массив числами, которые и будут выступать номерами страниц
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map((p) => {
                return (
                    <span className={props.currentPage === p && styles.selectedPages} onClick={(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>
                )
            })}
        </div>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        {props.usersData.map((user) => {
            return (<div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles["user-photo"]} />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>
            )
        })}
    </div>)
}

export default Users;