import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/auth-reducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        usersAPI.getAuthMe().then(data => {
                if (data.resultCode === 0){
                    let {email,id, login} = data.data;
                    this.props.setAuthUserData(email,id, login);
                }
            });
    }
    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}
const mapStateToProps = (state:any) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
});

export default connect( mapStateToProps, {setAuthUserData})(HeaderContainer);