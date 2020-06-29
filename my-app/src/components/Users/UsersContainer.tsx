import { connect } from 'react-redux';
import Users, { typeUser } from './Users';
import { followAC, unfolowAC, setUsersAC } from '../../redux/users-reducer';


let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer