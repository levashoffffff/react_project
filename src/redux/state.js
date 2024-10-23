let state = {
    profilePage: {
      postData: [
        {id: 1, message: 'Hi, how are you', count: 15},
        {id: 2, message: 'It s my first post', count: 20}
      ]
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

export default state;