import { getAuthUserData } from "./auth-reducer.js";
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    //Данный параметр отвечает за инициализацию, false это значит что мы не авторизованы и показывать контент не нужно
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                //двойная деструктуризация, склейка двух объектов, второй перезапишет свойства первого
                ...state,
                initialized: true,
            }
        }

        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}

//Функция thunk для инициализации
export const initializeApp = () => (dispatch) => {
    //Диспатчим авторизационные данные
    let promise = dispatch(getAuthUserData());
    //Когда данные получены инициализируемся
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}


export default appReducer;