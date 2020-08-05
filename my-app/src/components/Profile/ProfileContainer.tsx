import React, { ComponentType } from 'react';
import Profile, { ProfileType } from './Profile';
import { connect } from 'react-redux';
import { getProfile } from './../../redux/profile-reducer';
import { withRouter, Redirect, RouteComponentProps } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

type MapStateToPropsType = {
    profile: ProfileType,
}

type MapDispatchToPropsType = {
    getProfile: (userId:number) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {
    userId:string,
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


let mapStateToProps = (state:any): MapStateToPropsType => (
    {
    profile: state.profilePage.profile,
});

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId)
        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
    }
    render() {
        
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        )
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)