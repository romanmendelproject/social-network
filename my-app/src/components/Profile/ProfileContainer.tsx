import React, { ComponentType } from 'react';
import Profile, { ProfileType } from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from './../../redux/profile-reducer';
import { withRouter, Redirect, RouteComponentProps } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

type MapStateToPropsType = {
    profile: ProfileType,
    status: string,
    isAuth: boolean,
    authorizedUserId: number
}

type MapDispatchToPropsType = {
    getProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void,
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {
    userId: string,
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


let mapStateToProps = (state: any): MapStateToPropsType => (
    {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    });

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId)

        this.props.getStatus(userId)
    }
    render() {

        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)