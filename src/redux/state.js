import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

/* const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'; */

let store = {
  //Хранилище данных, мы сделали его приватным, к нему нельзя обращаться напрямую.
  _state: {
    profilePage: {
      postData: [
        {id: 1, message: 'Hi, how are you', count: 15},
        {id: 2, message: 'It s my first post', count: 20}
      ],
      newPostText: 'Artur Levashov'
    },
    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Artur'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Valera'},
      ],
      messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hello'},
      ],
      newMessageBody: ''
    },
    navbar: {
      friends: [
        {id: 1, name: "Vasya"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Sveta"},
      ]
    },
    sidebar: {}
  },

  //После отработки функции subscribe этой функции присвоится значение observer
  _callSubscriber() {
    console.log('State was changed');
  },

  //Метод возвращающий _state
  getState() {
    return this._state;
  },

  //Написали функцию которая будет связующим звеном между index.js и state.js в качестве параметра передали observer который содержит функию renderEntireTree в index.js. Далее присвоили функции renderEntireTree созданной в state.js значение observer = const root = ReactDOM.createRoot .......
  subscribe(observer) {
    this._callSubscriber = observer; //наблюдатель
  },

/*   //Функция которая будет отрабатывать при клике на кнопку
  addPost(postMessage) {
    let newPost = {
      id: 3,
      message: postMessage,
      count: 0
    };
    this._state.profilePage.postData.push(newPost);
    //Запускается функция, которая будет повторно отрисовывать render с учетом изменившихся данных в state.js
    this._callSubscriber();
  },

  //Функция которая будет отрабатывать при изменении textarea
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    //Запускается функция, которая будет повторно отрисовывать render с учетом изменившихся данных в state.js
    this._callSubscriber();
  }, */

  dispatch(action) { //{type: 'ADD-POST'}

    //В данную переменную попадает обновленный объект после отработки reducer
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber();
    /* //Участок кода который будет отрабатывать при клике на кнопку
    if(action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        message: action.postMessage,
        count: 0
      };
      this._state.profilePage.postData.push(newPost);
      //Запускается функция, которая будет повторно отрисовывать render с учетом изменившихся данных в state.js
      this._callSubscriber();
    } 
    //Участок кода который будет отрабатывать при изменении textarea
    else if(action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      //Запускается функция, которая будет повторно отрисовывать render с учетом изменившихся данных в state.js
      this._callSubscriber();
    }
    else if(action.type === "UPDATE-NEW-MESSAGE-BODY") {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber();
    }
    else if(action.type === "SEND-MESSAGE") {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messagesData.push({id: 4, message: body});
      this._callSubscriber();
    } */
  }
}

/* export const addPostActionCreator = (text) => {
  return {
      type: 'ADD-POST',
      postMessage: text
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
      type: 'UPDATE-NEW-POST-TEXT',
      newText: text
  }
} */


/*   export const addPostActionCreator = (text) => {
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
  } */
  
/*   export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
  }

  export const newMessageBodyActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
  } */

export default store;
