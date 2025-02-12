import { profileAPI, usersAPI } from '../api/api.js';

const ADD_POST = 'ADD-POST';
/* const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; */
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = "SET_STATUS";

//Одноразовый объект
let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you', count: 15 },
        { id: 2, message: 'It s my first post', count: 20 }
    ],
    /* newPostText: 'Artur Levashov', */
    profile: null,
    status: ""
}

//В том случае если в state ничего не прийдет, то присваивается initialState
const profileReducer = (state = initialState, action) => {
    let stateCopy;
    /*     //Участок кода который будет отрабатывать при клике на кнопку
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: action.postMessage,
                count: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
        }
        //Участок кода который будет отрабатывать при изменении textarea
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            state.newPostText = action.newText;
        } */

    //Участок кода который будет отрабатывать при клике на кнопку
    if (action.type === 'ADD-POST') {
        stateCopy = { ...state };
        let newPost = {
            id: 3,
            message: action.newPostText,
            count: 0
        };
        //Делаем глубокую копию, т.к. изменяюется вложенный массив postData
        stateCopy.postData = [...state.postData];
        stateCopy.postData.push(newPost);
        /* stateCopy.newPostText = ''; */
        return stateCopy;
    }
    //Участок кода который будет отрабатывать при изменении textarea
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        stateCopy = { ...state };
        //Не делаем глубокую копию, т.к. достаточно и поверхностной копии let stateCopy = {...state};
        stateCopy.newPostText = action.newText;
        return stateCopy;
    }
    else if (action.type === 'SET_STATUS') {
        return { ...state, status: action.status }
    }
    else if (action.type === 'SET_USER_PROFILE') {
        return { ...state, profile: action.profile }
    }

    return state;
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

/* export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
} */

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}

//THUNK
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        //Заполняем массив
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        //Заполняем массив
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
            //Заполняем массив
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;