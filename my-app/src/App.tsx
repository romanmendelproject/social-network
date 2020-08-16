import React, { Component, ComponentType } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initialize } from './redux/app-reducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';

type PropsType = {
  initialize: () => void
  initialized:boolean
}


class App extends Component<PropsType> {
  componentDidMount() {
    this.props.initialize()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className='body-wrapper'>
          <Navbar />
          <div className='app-wrapper-content'>

            <Route exact path="/dialogs"
              render={() => <DialogsContainer />} />

            <Route path="/profile/:userId?"
              render={() => <ProfileContainer />} />

            <Route path="/users"
              render={() => <UsersContainer />} />

            <Route path="/login"
              render={() => <Login />} />

          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state: any) => (
  {
    initialized: state.app.initialized
  });


export default compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, { initialize }))(App)

