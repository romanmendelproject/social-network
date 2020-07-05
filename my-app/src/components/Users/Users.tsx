import React from "react";
import s from "./Users.module.css";
import axios from 'axios';
import userPhoto from "../../assets/images/user2.jpeg"

export type propsTypeUsers = {
  users: Array<typeUser>,
  follow: (UserId: number) => void,
  unfollow: (UserId: number) => void,
  setUsers: (users: Array<typeUser>) => void,
  setCurrentPage: (currentPage: number) => void,
  setTotalUsersCount: (totalCount: number) => void,
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

class Users extends React.Component<propsTypeUsers>{
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        debugger
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) 
      pages.push(i)
    return <div className={s.UsersContainer}>
      <div>
        {pages.map(p => {
          return <span
            className={this.props.currentPage === p ? s.selectedPage : ''}
            onClick={() => { this.onPageChanged(p) }}
          >{p}</span>
        })}

      </div>
      {
        this.props.users.map(u => <div key={u.id}>
          <div className={s.UserContainer}>
            <div className={s.UserContainerImg}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
              {u.followed
                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}


export default Users;