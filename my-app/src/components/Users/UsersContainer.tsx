import { connect } from 'react-redux';
import { setCurrentPage,requestUsers, followUsers, unfollowUsers} from '../../redux/users-reducer';
import React from "react";
import Users, { typeUser } from "./Users";
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';


export type propsTypeUsersContainer = {
  users: Array<typeUser>,
  setCurrentPage: (currentPage: number) => void,
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: Array<number>,
  requestUsers: (currentPage: number, pageSize: number) => void,
  followUsers: (userId: number) => void,
  unfollowUsers: (userId: number) => void,
};

class UsersContainer extends React.Component<propsTypeUsersContainer>{
  componentDidMount(){
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber: number) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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

export default compose(
  connect(mapStateToProps,
  {
    setCurrentPage,
    requestUsers,
    followUsers,
    unfollowUsers,
  }

))(UsersContainer);
