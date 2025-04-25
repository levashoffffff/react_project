import React, { memo } from 'react';
import styles from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Message = (props) => {
    console.log('hello');
    return (
        <div className={styles.message}>{props.message}</div>
    )
};

export default memo(Message);