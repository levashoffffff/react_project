import { authAPI } from "../api/api.js";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    //Структура схожа с ответом от сервера
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                //двойная деструктуризация, склейка двух объектов, второй перезапишет свойства первого
                ...state,
                ...action.payload,
                /* isAuth: true */
            }
        }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: { userId, email, login, isAuth }
    }
}

/* export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then((response) => {
        //Если мы авторизованы, код пришел 0
        if (response.data.resultCode === 0) {
            //Сделали деструктуризацию, в data сидят эти свойства id, login, email
            let { id, login, email } = response.data.data;
            //В этом случае диспатчим авторизационные данные. Очень внимательно с последовательностью. Такая же как в reducers!!!
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
} */

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
        //Если мы авторизованы, код пришел 0
        if (response.data.resultCode === 0) {
            //Сделали деструктуризацию, в data сидят эти свойства id, login, email
            let { id, login, email } = response.data.data;
            //В этом случае диспатчим авторизационные данные. Очень внимательно с последовательностью. Такая же как в reducers!!!
            dispatch(setAuthUserData(id, email, login, true));
        }
}

export const login = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe, true).then((response) => {
        //Если мы авторизованы, код пришел 0
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message}));
        }
    });
}

export const logout = (e) => (dispatch) => {
    authAPI.logout().then((response) => {
        //Если мы авторизованы, код пришел 0
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
}



export default authReducer;