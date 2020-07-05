import { connect } from 'react-redux';
import { followAC, unfolowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer';
import React from "react";
import axios from 'axios';
import Users, { typeUser } from "./Users";


export type propsTypeUsersContainer = {
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
  
  class UsersContainer extends React.Component<propsTypeUsersContainer>{
    componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          // this.props.setTotalUsersCount(response.data.totalCount);
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
      return <Users
      totalUsersCount = {this.props.totalUsersCount}
      pageSize = {this.props.pageSize}
      currentPage = {this.props.currentPage}
      users = {this.props.users}
      onPageChanged = {this.onPageChanged}
      follow= {this.props.follow}
      unfollow= {this.props.unfollow}
      />
    }
  }

let mapStateToProps = (state: any) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfolowAC(userId))
        },
        setUsers: (users: Array<typeUser>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage:number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount:number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
