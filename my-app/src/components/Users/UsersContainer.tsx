import { connect } from 'react-redux';
import { setCurrentPage,getUsers, followUsers, unfollowUsers} from '../../redux/users-reducer';
import React from "react";
import Users, { typeUser } from "./Users";
import Preloader from '../common/preloader/preloader';


export type propsTypeUsersContainer = {
  users: Array<typeUser>,
  setCurrentPage: (currentPage: number) => void,
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: Array<number>,
  getUsers: (currentPage: number, pageSize: number) => void,
  followUsers: (userId: number) => void,
  unfollowUsers: (userId: number) => void,
};

class UsersContainer extends React.Component<propsTypeUsersContainer>{
  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
        followingInProgress={this.props.followingInProgress}
        followUsers={this.props.followUsers}
        unfollowUsers={this.props.unfollowUsers}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress:state.usersPage.followingInProgress

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
    setCurrentPage,
    getUsers,
    followUsers,
    unfollowUsers,
  }

)(UsersContainer);
