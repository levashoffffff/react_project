import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {
    let getUsers = () => {
        if (props.usersData.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                props.setUsers(response.data.items);
            });

            /* props.setUsers([
                { id: 1, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' }, photoUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' },
                { id: 2, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' },
                { id: 3, followed: false, fullName: 'Andrew', status: 'I am a boss again', location: { city: 'Ufa', country: 'Russia' }, photoUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' }
            ]) */
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
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
        </div>
    )

}

export default Users;