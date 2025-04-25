import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { newMessageBodyActionCreator, sendMessageActionCreator } from './../../redux/dialogs-reducer.js'
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls.js';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators.js';

{/*const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}*/}

{/*const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}*/}

const Dialogs = (props) => {
    {/*Через props получаем строку newMessagesBody */ }
    /* let newMessageBody = props.dialogsPage.newMessageBody; */

    {/*let onSendMessageClick = () => {
        /* props.dispatch(sendMessageActionCreator()); 
        props.sendMessage();}*/}


   {/*  let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        /* props.dispatch(newMessageBodyActionCreator(body)); }*/ 
    }

    //Функция для redux-form
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    {/*Данные*/ }
    {/*let dialogsData = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Artur'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Valera'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hello'},
    ];*/}

    {/*Преобразуем массив объектов в массив jsx элементов dialog */ }
    let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
        )
    });

    {/*Преобразуем массив объектов в массив jsx элементов dialog */ }
    let messagesElements = props.dialogsPage.messagesData.map((message) => {
        return (
            <Message message={message.message} key={message.id} />
        )
    })

    //Редирект на страницу логин, когда не авторизованы
    if (props.isAuth == false) {
        return <Navigate to={"/login"} />
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles["dialog-items"]}>
                {dialogsElements}
                {/*
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

                <DialogItem name="Andrey" id="1" />
                <DialogItem name="Artur" id="2" />
                <DialogItem name="Katya" id="3" />
                <DialogItem name="Victor" id="4" />
                <DialogItem name="Valera" id="5" />*/}
            </div>
            <div className={styles.messages}>
                <div>
                    {messagesElements}
                </div>

                <AddMessageFormRedux onSubmit={addNewMessage}/>
                {/*                 <div>
                    <textarea 
                        value={newMessageBody} 
                        onChange={onNewMessageChange} 
                        placeholder='Enter your message'> 
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Отправить</button>
                </div> */}

                {/*
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>

                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Hello"/>

                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>Hello</div>*/}

            </div>
        </div>
    )
}

let maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" validate={[requiredField, maxLength50]} />
                {/* <Field component="textarea" name="newMessageBody" placeholder="Enter your message" /> */}
                {/* <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='Enter your message'>
                </textarea> */}
            </div>
            <div>
                {/* <button onClick={onSendMessageClick}>Отправить</button> */}
                <button>Отправить</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    // a unique name for the form
    form: 'dialogAddMessageForm'
  })(AddMessageForm)

export default Dialogs;