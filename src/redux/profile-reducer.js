const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

//Одноразовый объект
let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you', count: 15 },
        { id: 2, message: 'It s my first post', count: 20 }
    ],
    newPostText: 'Artur Levashov'
}

//В том случае если в state ничего не прийдет, то присваивается initialState
const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
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
        let newPost = {
            id: 3,
            message: action.postMessage,
            count: 0
        };
        //Делаем глубокую копию, т.к. изменяюется вложенный массив postData
        stateCopy.postData = [...state.postData]; 
        stateCopy.postData.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;
    }
    //Участок кода который будет отрабатывать при изменении textarea
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //Не делаем глубокую копию, т.к. достаточно и поверхностной копии let stateCopy = {...state};
        stateCopy.newPostText = action.newText;
        return stateCopy;
    }

    return state;
}

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        postMessage: text
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;