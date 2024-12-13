import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            this.props.setUsers(response.data.items);
        });
    }

    /* getUsers = () => {
        if (this.props.usersData.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                this.props.setUsers(response.data.items);
            });
        }
    } */
    render() {
        return (
            <div>
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                {this.props.usersData.map((user) => {
                    return (<div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles["user-photo"]} />
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>}
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

}

export default Users;