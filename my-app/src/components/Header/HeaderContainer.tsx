import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthData, logout } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component<any> {
    componentDidMount() {
       this.props.getAuthData() 
    }
    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
    }
}
const mapStateToProps = (state:any) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
});

export default connect( mapStateToProps, {getAuthData, logout})(HeaderContainer);