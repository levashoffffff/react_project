import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

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
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles["user-photo"]} />
                        </NavLink>
                    </div>
                    <div>

                        {/* По клику на кнопку 
                        {user.followed
                            ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(user.id) }}>Follow</button>} */}

                        {user.followed
                            ? <button onClick={() => {
                                //Выполняем Delete запрос, он как и get принимает объект настроект вторым параметром
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "63e33a53-2eb5-441f-b352-308d2e906db0"
                                        }
                                    }).then((response) => {
                                        //Если сервер подтвердил, что подписка произошла
                                        if (response.data.resultCode == 0) {
                                            //Запускаем callback follow и диспатчим id пользователя
                                            props.unfollow(user.id);
                                        }
                                    });

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                //Выполняем Post запрос, но объект настроек прописываются 3м параметром, а не 2м как в Get запросе!!!! Поэтому 2м параметром поставили заглушку null
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, null,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "63e33a53-2eb5-441f-b352-308d2e906db0"
                                        }
                                    }).then((response) => {

                                        //Если сервер подтвердил, что подписка произошла
                                        if (response.data.resultCode == 0) {
                                            //Запускаем callback follow и диспатчим id пользователя
                                            props.follow(user.id);
                                        }
                                    });

                            }}>Follow</button>}
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