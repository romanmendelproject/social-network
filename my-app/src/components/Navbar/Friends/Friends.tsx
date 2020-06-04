import React from 'react';
import s from './Friends.module.css';
import { NavLink } from 'react-router-dom';

export type friendsTypeItem = {
    id: number;
    name: string;
    face: string;
}

const Friends = (props: friendsTypeItem) => {
    return (
        <div className={s.friendFace}>
            <img src={props.face} />
            <span>{props.name}</span>
        </div>

    )
}

export default Friends;