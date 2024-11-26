import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducers';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        usersData: state.userPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;