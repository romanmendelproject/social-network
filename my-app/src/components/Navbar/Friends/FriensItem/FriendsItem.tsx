import React from 'react';
import s from './FriendsItem.module.css';

export type friendsTypeItem = {
    id: number;
    name: string;
    face: string;
}

const FriendsItem = (props: friendsTypeItem) => {
    return (
        <div className={s.friendFace}>
            <img src={props.face} />
            <span>{props.name}</span>
        </div>

    )
}

export default FriendsItem;