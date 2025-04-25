import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

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
    isFetching: false,
    //Для кнопки во время запроса
    followingInProgress: []
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
            return { ...state, usersData: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
//Берем данные с сервера и помещаем в state
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
}

//Thunk

//Функция получения пользователей
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        //Параллельно с запросом делаем изменение в state для отображения preloader
        dispatch(toggleIsFetching(true)); //Не пишем this, т.к. эта функция находится в этом же файле
        //Устанавливаем текущую страницу
        dispatch(setCurrentPage(currentPage));
        //Делаем первичный запрос на сервер
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            //После того, как ответ пришел убираем preloader
            dispatch(toggleIsFetching(false));
            //Заполняем массив
            dispatch(setUsers(data.items));
            //То количество объектов, которое хотим получить от сервера
            dispatch(setTotalUsersCount(data.totalCount - 26950));
        });
    }
}

//Функция подписка
export const follow = (userId) => {
    return (dispatch) => {
        //Disable button, чтобы мы не могли на неё нажимать, когда ждем ответа от сервера
        dispatch(toggleFollowingProgress(true, userId));
        //Выполняем Post запрос, но объект настроек прописываются 3м параметром, а не 2м как в Get запросе!!!! Поэтому 2м параметром поставили заглушку null
        usersAPI.follow(userId).then((response) => {

            //Если сервер подтвердил, что подписка произошла
            if (response.data.resultCode == 0) {
                //Запускаем callback follow и диспатчим id пользователя
                dispatch(followSuccess(userId));
            }
            //Когда заканчивается запрос, то включим кнопку enable button
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

//Функция отписка
export const unfollow = (userId) => {
    return (dispatch) => {
        //Disable button, чтобы мы не могли на неё нажимать, когда ждем ответа от сервера
        dispatch(toggleFollowingProgress(true, userId));
        //Выполняем Delete запрос, он как и get принимает объект настроект вторым параметром
        usersAPI.unfollow(userId).then((response) => {
            //Если сервер подтвердил, что подписка произошла
            if (response.data.resultCode == 0) {
                //Запускаем callback follow и диспатчим id пользователя
                dispatch(unfollowSuccess(userId));
            }
            //Когда заканчивается запрос, то включим кнопку enable button
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export default usersReducer