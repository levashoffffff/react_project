/* const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'; */
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    /* newMessageBody: '' */
  }

const dialogsReducer = (state = initialState, action) => {
    //Сделали поверхностную копию state
    let stateCopy;
    /* stateCopy.messagesData = [...state.messagesData]; */
    //Синтаксис #2
    /* let stateCopy = {
        ...state,
        messagesData: [...state.messagesData]
    }; */

    switch (action.type) {
/*         case "UPDATE-NEW-MESSAGE-BODY":
            //В данном случае не делаем глубокую копию, т.к. меняется примитив newMessageBody
            stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy; */
        case "SEND-MESSAGE":
            let body = action.newMessageBody;
            //В данном случае делаем глубокую копию, т.к. меняется массив messagesData
            stateCopy = {
                ...state,
                messagesData: [...state.messagesData]
            };
            /* stateCopy.newMessageBody = ""; */
            stateCopy.messagesData.push({ id: 4, message: body });
            return stateCopy;
        default:
            return state;
    }


    /* if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        state.newMessageBody = action.body;
    }
    else if (action.type === "SEND-MESSAGE") {
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messagesData.push({ id: 4, message: body });
    }

    return state; */
}

export const sendMessageActionCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessageBody
    }
}

/* export const newMessageBodyActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
} */

export default dialogsReducer;