import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { newMessageBodyActionCreator, sendMessageActionCreator } from './../../redux/dialogs-reducer.js'
import Dialogs from './Dialogs.jsx';
import {connect} from 'react-redux';
import StoreContext from './../../StoreContext.js';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';


/* const DialogsContainer = (props) => {

    //let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(newMessageBodyActionCreator(body));
    }

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                return (
                <Dialogs
                    dialogsPage={state.dialogsPage}
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick} />
                )
            }
            }
        </StoreContext.Consumer>
        /* <Dialogs
            dialogsPage={state}
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick} /> 

    )
} */

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        /* isAuth: state.auth.isAuth */
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        /* updateNewMessageBody: (body) => {
            dispatch(newMessageBodyActionCreator(body));
        }, */
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody));
        }
    }
}

//HOC функция принимающая на входе компоненты и возвращает контейнерную компоненту
let AuthRedirectComponent = withAuthRedirect(Dialogs);
/* let AuthRedirectComponent = (props) => {
    //Редирект на страницу логин, когда не авторизованы
    if (this.props.isAuth == false) {
        return <Navigate to={"/login"} />
    }
    return <Dialogs {...props} />
} */
    

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;

/* export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs) */