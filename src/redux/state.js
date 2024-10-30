
//После отработки функции subscribe этой функции присвоится значение observer
let renderEntireTree = () => {
  console.log('State was changed');
}

//Хранилище данных
let state = {
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
}

//Функция которая будет отрабатывать при клике на кнопку
export const addPost = (postMessage) => {

  let newPost = {
    id: 3,
    message: postMessage,
    count: 0
  };

  state.profilePage.postData.push(newPost);
  //Запускается функция, которая будет повторно отрисовывать render с учетом изменившихся данных в state.js
  renderEntireTree();
}

//Функция которая будет отрабатывать при изменении textarea
export const updateNewPostText = (newText) => {

  state.profilePage.newPostText = newText;
  //Запускается функция, которая будет повторно отрисовывать render с учетом изменившихся данных в state.js
  renderEntireTree();
}

//Написали функцию которая будет связующим звеном между index.js и state.js в качестве параметра передали observer который содержит функию renderEntireTree в index.js. Далее присвоили функции renderEntireTree созданной в state.js значение observer = const root = ReactDOM.createRoot .......
export const subscribe = (observer) => {
  renderEntireTree = observer; //наблюдатель
}

export default state;