import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

export type propsTypeDialog = {
    id: number;
    name: string;
    face: string;
}


const DialogItem = (props: propsTypeDialog) => {
    return <div className={s.dialog + ' ' + s.active}>
        <img src={props.face} /><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}


export default DialogItem