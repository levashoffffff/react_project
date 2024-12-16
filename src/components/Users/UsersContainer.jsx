import React from 'react';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC} from '../../redux/users-reducers';
import { connect } from 'react-redux';
import Users from './Users';
import axios from 'axios';

//Объединили две контейнерные компоненты в один файл

//Классова компонента отвечающая за запрос на сервер
class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount - 26950);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <Users 
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    usersData={this.props.usersData}
                    onPageChanged={this.onPageChanged}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
        />
    }

}

let mapStateToProps = (state) => {
    return {
        usersData: state.userPage.usersData,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
    }
}

//Функциональная компонента отвечающая за свзять со store и прокидыванием данных в презентационную компоненту
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;