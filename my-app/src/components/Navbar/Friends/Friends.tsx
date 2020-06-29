import React from 'react';
import FriendsItem, { friendsTypeItem } from './FriensItem/FriendsItem';
import { propsTypePosts } from '../../Profile/MyPosts/MyPosts';
import s from '../Navbar.module.css';


const Friends = (props: any ) => {
    return (
        <div className={s.friends}>
            < div className={s.friends_row1} >
                {props.friendsData.slice(0, 3).map((f: friendsTypeItem) =>
                    <FriendsItem id={f.id} name={f.name} face={f.face} />
                )}
            </div>
            < div className={s.friends_row2} >
                {props.friendsData.slice(3, 6).map((f: friendsTypeItem) =>
                    <FriendsItem id={f.id} name={f.name} face={f.face} />
                )}
            </div >
        </div >
)
}
export default Friends;