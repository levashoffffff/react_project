import React from 'react';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducers';
import { connect } from 'react-redux';
import Users from './Users';
import axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
//DAL импорт функций, которые делают запросы на сервер
import {usersAPI} from '../../api/api.js';

//Объединили две контейнерные компоненты в один файл

//Классова компонента отвечающая за запрос на сервер
class UsersAPIComponent extends React.Component {

    componentDidMount() {
        //Параллельно с запросом делаем изменение в state для отображения preloader
        this.props.toggleIsFetching(true);
        //Делаем первичный запрос на сервер
        /* axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}) */
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            //После того, как ответ пришел убираем preloader
            this.props.toggleIsFetching(false);
            //Заполняем массив
            this.props.setUsers(data.items);
            //То количество объектов, которое хотим получить от сервера
            this.props.setTotalUsersCount(data.totalCount - 26950);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        //При изменении страницы тоже добавляем preloader
        this.props.toggleIsFetching(true);
        /* axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true}) */
        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
            //После ответа удаляем preloader
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader /> :
                null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                usersData={this.props.usersData}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        usersData: state.userPage.usersData,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
}

//Функциональная компонента отвечающая за свзять со store и прокидыванием данных в презентационную компоненту
const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersAPIComponent);

export default UsersContainer;

//ПЕРВЫЙ ВАРИАНТ ЗАПИСИ 
//import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../redux/users-reducers';
/* let mapDispatchToProps = (dispatch) => {
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
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

//Функциональная компонента отвечающая за свзять со store и прокидыванием данных в презентационную компоненту
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer; */

//ВТОРОЙ ВАРИАНТ ЗАПИСИ 
//import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducers';
/* //Функциональная компонента отвечающая за свзять со store и прокидыванием данных в презентационную компоненту
const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setUsersTotalCountAC,
    toggleIsFetching: toggleIsFetchingAC
})(UsersAPIComponent);

export default UsersContainer; */

