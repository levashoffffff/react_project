
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
      ]
    },
    navbar: {
      friends: [
        {id: 1, name: "Vasya"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Sveta"},
      ]
    }
  },

  //Метод возвращающий _state
  getState() {
    return this._state;
  },

  //После отработки функции subscribe этой функции присвоится значение observer
  _callSubscriber() {
    console.log('State was changed');
  },

  //Функция которая будет отрабатывать при клике на кнопку
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
  },

  //Написали функцию которая будет связующим звеном между index.js и state.js в качестве параметра передали observer который содержит функию renderEntireTree в index.js. Далее присвоили функции renderEntireTree созданной в state.js значение observer = const root = ReactDOM.createRoot .......
  subscribe(observer) {
    this._callSubscriber = observer; //наблюдатель
  }

}

export default store;
