import React from "react";
import userPhoto from "../../assets/images/user2.jpeg"
import s from "./Users.module.css";

export type propsTypeUsers = {
  users: Array<typeUser>,
  follow: (UserId: number) => void,
  unfollow: (UserId: number) => void,
  onPageChanged: (pageNumber: number) => void,
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
};


export type typeUser = {
  id: number,
  followed: boolean,
  name: string,
  status: string,
  location: typeLocation,
  photos: typePhotos,
};

export type typeLocation = {
  city: string,
  country: string,
};

export type typePhotos = {
  small: string,
  large: string,
};

let Users = (props: propsTypeUsers) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = [];
  for (let i = 1; i <= pagesCount; i++)
    pages.push(i)

  return <div className={s.UsersContainer}>
    <div>
      {pages.map(p => {
        return <span
          className={props.currentPage === p ? s.selectedPage : ''}
          onClick={() => { props.onPageChanged(p) }}
        >{p}</span>
      })}

    </div>
    
    {
      props.users.map((u) => <div key={u.id}>
        <div className={s.UserContainer}>
          <div className={s.UserContainerImg}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
            {u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
          <div className={s.UserContainerBody}>
            <div className={s.UserContainerName}>
              <span>{u.name}</span>
              <span>{u.status}</span>
            </div>
            <div className={s.UserContainerLocation}>
              {/* <span>{u.location.city}</span> */}
              {/* <span>{u.location.country}</span> */}
            </div>
          </div>
        </div>
      </div>
      )

    }
  </div>
}


export default Users;