import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import { propsTypeDialog } from './components/Dialogs/DialogItem/DialogItem';
import { propsTypeMessage } from './components/Dialogs/Message/Message';
import { propsTypePost } from './components/Profile/MyPosts/Post/Post';

export type propsType =
  {
    state:
    {
      dialogsPage: {
        dialogsData: Array<propsTypeDialog>;
        messagesData: Array<propsTypeMessage>;
        newMessageText: string
      },

      profilePage: {
        postData: Array<propsTypePost>;
        newPostText: string
      },

      friends: {
        friendsData: Array<{
          id: number;
          name: string;
          face: string;
        }>
      }
    },
    dispatch: () => void;
  }

const App = (props: propsType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='body-wrapper'>
          <Navbar state={props.state.friends} />
          <div className='app-wrapper-content'>
            <Route exact path="/dialogs"
              render={() => <Dialogs
                dialogsPage={props.state.dialogsPage} 
                dispatch={props.dispatch}
                />} />
            <Route path="/profile"
              render={() => <Profile
                profilePage={props.state.profilePage} 
                dispatch={props.dispatch}
                />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;