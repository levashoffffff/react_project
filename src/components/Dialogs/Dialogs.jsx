import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';


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

    //ДЗ тренировка onClick, ref, VirtualDOM
    let newMessageElement = React.createRef();
    let messageData = () => {
        let message = newMessageElement.current.value;
        alert(message);
        newMessageElement.current.value = '';
    }


    {/*Данные*/}
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

    {/*Преобразуем массив объектов в массив jsx элементов dialog */}
    let dialogsElements = props.state.dialogsData.map( (dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id} />
        )
    });

    {/*Преобразуем массив объектов в массив jsx элементов dialog */}
    let messagesElements = props.state.messagesData.map( (message) => {
        return (
            <Message message={message.message}/>
        )
    })

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
                {messagesElements}
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


                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <button onClick={messageData}>Отправить</button>
                
            </div>   
        </div>
    )
}

export default Dialogs;