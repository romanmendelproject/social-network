import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';


export type propsTypeMessage = {
    id: number;
    message: string;
}


const Message = (props: propsTypeMessage) => {
    return <div className={s.message}>
        <div>{props.message}</div>
    </div>
}



export default Message