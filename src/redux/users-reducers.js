const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    /* usersData: [
        { id: 1, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' }, photoUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' },
        { id: 2, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' },
        { id: 3, followed: false, fullName: 'Andrew', status: 'I am a boss again', location: { city: 'Ufa', country: 'Russia' }, photoUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' },
    ] */
    usersData: [],
    //Число постов на странице
    pageSize: 5,
    //Общее количество элементов
    totalUsersCount: 0,
    //Текущая страница
    currentPage: 1,
    //Для preloader
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case FOLLOW: {
            stateCopy = {
                ...state,
                /* usersData: [...state.usersData] */
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        //Возвращаем копию
                        return { ...user, followed: true }
                    }
                    //Возвращаем тот же объект
                    return user;
                })
            };
            return stateCopy;
        }
        case UNFOLLOW: {
            stateCopy = {
                ...state,
                /* usersData: [...state.usersData] */
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        //Возвращаем копию
                        return { ...user, followed: false }
                    }
                    //Возвращаем тот же объект
                    return user;
                })
            };
            return stateCopy;
        }
        case SET_USERS: {
            /* return {...state, usersData: [...state.usersData, ...action.users]} */
            return {...state, usersData: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
//Берем данные с сервера и помещаем в state
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setUsersTotalCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}

export const toggleIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export default usersReducer