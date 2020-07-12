import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props: any) => {
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

        </div>
      </div>
    </div>
  );
}

export default App;