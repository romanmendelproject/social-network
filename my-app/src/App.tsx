import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

// export type propsType =
//   {
//     state:
//     {
//       dialogsPage: {
//         dialogsData: Array<propsTypeDialog>;
//         messagesData: Array<propsTypeMessage>;
//         newMessageText: string
//       },

//       profilePage: {
//         postData: Array<propsTypePost>;
//         newPostText: string
//       },

//       friends: {
//         friendsData: Array<{
//           id: number;
//           name: string;
//           face: string;
//         }>
//       }
//     },
//     dispatch: () => void;
//   }

const App = (props: any) => {
  debugger
  return (
      <div className='app-wrapper'>
        <Header />
        <div className='body-wrapper'>
          <Navbar state={props.state.friends} />
          <div className='app-wrapper-content'>
            <Route exact path="/dialogs"
              render={() => <DialogsContainer
                store={props.store}
              />} />
            <Route path="/profile"
              render={() => <Profile
                store={props.store}
              />} />
          </div>
        </div>
      </div>
  );
}

export default App;