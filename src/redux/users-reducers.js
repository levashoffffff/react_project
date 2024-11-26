const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersData: [
        { id: 1, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' }, photoUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' },
        { id: 2, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' },
        { id: 3, followed: false, fullName: 'Andrew', status: 'I am a boss again', location: { city: 'Ufa', country: 'Russia' }, photoUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' },
    ]
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
            return {...state, usersData: [...state.usersData, ...action.users]}
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

export default usersReducer