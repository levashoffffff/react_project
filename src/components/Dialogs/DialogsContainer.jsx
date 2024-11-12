import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { newMessageBodyActionCreator, sendMessageActionCreator } from './../../redux/dialogs-reducer.js'
import Dialogs from './Dialogs.jsx';


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(newMessageBodyActionCreator(body));
    }

    return (

        <Dialogs
            dialogsPage={state}
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick} />

    )
}

export default DialogsContainer;