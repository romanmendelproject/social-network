import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

type MapStateToPropsType = {
    isAuth: boolean,
}

let mapStateToProps = (state: any):MapStateToPropsType => ({
        isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component:any) => {
    class RedirectComponent extends React.Component<MapStateToPropsType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"} />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return ConnectedAuthRedirectComponent
}