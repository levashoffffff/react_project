const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state;
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messagesData.push({ id: 4, message: body });
            return state;
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

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const newMessageBodyActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;