import React from 'react';
import {
    follow,
    /* setUsers, */
    unfollow,
    setCurrentPage,
    /* setTotalUsersCount, toggleIsFetching, */
    toggleFollowingProgress,
    getUsers
} from '../../redux/users-reducers';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserSuperSelector, getCurrentPage, getPageSize, getTotalUsersCount, getUser, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';


//Объединили две контейнерные компоненты в один файл

//Классова компонента отвечающая за запрос на сервер
class UsersAPIComponent extends React.Component {

    componentDidMount() {
        /* //Параллельно с запросом делаем изменение в state для отображения preloader
        this.props.toggleIsFetching(true);
        //Делаем первичный запрос на сервер
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            //После того, как ответ пришел убираем preloader
            this.props.toggleIsFetching(false);
            //Заполняем массив
            this.props.setUsers(data.items);
            //То количество объектов, которое хотим получить от сервера
            this.props.setTotalUsersCount(data.totalCount - 26950);
        }); */
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        /* this.props.setCurrentPage(pageNumber);
        //При изменении страницы тоже добавляем preloader
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
            //После ответа удаляем preloader
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        }); */
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
                /* toggleFollowingProgress={this.props.toggleFollowingProgress} */
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}

/* let mapStateToProps = (state) => {
    return {
        usersData: state.userPage.usersData,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
} */

let mapStateToProps = (state) => {
    return {
        /* usersData: getUser(state), */
        usersData: getUserSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

let withRedirect = withAuthRedirect(UsersAPIComponent);

//Функциональная компонента отвечающая за свзять со store и прокидыванием данных в презентационную компоненту
const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    /* setUsers, */
    setCurrentPage,
    /* setTotalUsersCount, */
    /* toggleIsFetching, */
    toggleFollowingProgress,
    /* getUsers: getUsersThunkCreator ,одно и то же*/
    getUsers
})(withRedirect);

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

