import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

class Dialogs extends React.Component {
    
    constructor(props) {
        super(props);
        /*Через props получаем строку newMessagesBody */
        this.newMessageBody = this.props.dialogsPage.newMessageBody;
    }

    onSendMessageClick = () => {
        this.props.sendMessage();
    }

    onNewMessageChange = (e) => {
        this.props.updateNewMessageBody(e.target.value);
    }

    /*Преобразуем массив объектов в массив jsx элементов dialog */
    dialogsElements = () => {
        return (
            this.props.dialogsPage.dialogsData.map((dialog) => {
                return (
                    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
                )
            })
        )
    }

    /*Преобразуем массив объектов в массив jsx элементов dialog */
    messagesElements = () => {
        return (
            this.props.dialogsPage.messagesData.map((message) => {
                return (
                    <Message message={message.message} key={message.id} />
                )
            })
        )
    } 

    render() {
        return (
            <div className={styles.dialogs}>
                <div className={styles["dialog-items"]}>

                    {this.dialogsElements()}

                </div>
                <div className={styles.messages}>
                    <div>
                        {this.messagesElements()}
                    </div>
                    <div>
                        <textarea
                            value={this.props.newMessageBody}
                            onChange={this.onNewMessageChange}
                            placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={this.onSendMessageClick}>Отправить</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Dialogs;