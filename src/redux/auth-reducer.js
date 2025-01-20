import { authAPI } from "../api/api.js";
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
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login }
    }
}

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then((response) => {
        //Если мы авторизованы, код пришел 0
        if (response.data.resultCode === 0) {
            //Сделали деструктуризацию, в data сидят эти свойства id, login, email
            let { id, login, email } = response.data.data;
            //В этом случае диспатчим авторизационные данные. Очень внимательно с последовательностью. Такая же как в reducers!!!
            dispatch(setAuthUserData(id, email, login));
        }
    });
}



export default authReducer;