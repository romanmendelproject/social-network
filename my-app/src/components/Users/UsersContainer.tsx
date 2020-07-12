import { connect } from 'react-redux';
import { follow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching, unfollow } from '../../redux/users-reducer';
import React from "react";
import axios from 'axios';
import Users, { typeUser } from "./Users";
import Preloader from '../common/preloader/preloader';


export type propsTypeUsersContainer = {
  users: Array<typeUser>,
  follow: (UserId: number) => void,
  unfollow: (UserId: number) => void,
  setUsers: (users: Array<typeUser>) => void,
  setCurrentPage: (currentPage: number) => void,
  setTotalUsersCount: (totalCount: number) => void,
  toogleIsFetching: (isFetching: boolean) => void,
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  isFetching: boolean
};

class UsersContainer extends React.Component<propsTypeUsersContainer>{
  componentDidMount() {
    this.props.toogleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toogleIsFetching(false)
        this.props.setUsers(response.data.items);
        // this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.toogleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toogleIsFetching(false)
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <>
      {this.props.isFetching
        ? <div >
          <Preloader />
        </div>
        : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        isFetching={this.props.isFetching}
      />
    </>
  }
}

let mapStateToProps = (state: any) => {

  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

// let mapDispatchToProps = (dispatch: any) => {
//   return {
//     follow: (userId: number) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId: number) => {
//       dispatch(unfolowAC(userId))
//     },
//     setUsers: (users: Array<typeUser>) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage: number) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalUsersCount: number) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount))
//     },
//     toogleIsFetching: (isFetching: boolean) => {
//       dispatch(toogleIsFetchingAC(isFetching))
//     }
//   }
// }

export default connect(mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching
  }

)(UsersContainer);
