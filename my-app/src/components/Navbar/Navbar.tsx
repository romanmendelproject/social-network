import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends, { friendsTypeItem } from './Friends/Friends';

type friendsType = {
    state: {
        friendsData: Array<friendsTypeItem>
    }
}

const Navbar = (props: friendsType) => {
    return (
        <div className={s.navbarWrapper}>
            <div className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <a>News</a>
                </div>
                <div className={s.item}>
                    <a>Music</a>
                </div>
                <div className={s.item}>
                    <a>Settings</a>
                </div>
            </div>
            <div className={s.friends}>
                < div className={s.friends_row1} >
                    {props.state.friendsData.slice(0, 3).map(f =>
                        <Friends id={f.id} name={f.name} face={f.face} />
                    )}
                </div>
                < div className={s.friends_row2} >
                    {props.state.friendsData.slice(3, 6).map(f =>
                        <Friends id={f.id} name={f.name} face={f.face} />
                    )}
                </div >
            </div >

        </div >
    )
}

export default Navbar;