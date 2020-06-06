import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { propsTypePost } from './MyPosts/Post/Post';

export type propsTypePostsState = {
  profilePage: {
    postData: Array<propsTypePost>;
    newPostText: string
  },
  dispatch: (action: Object) => void;
}
const Profile = (props: propsTypePostsState) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.profilePage.postData} 
      dispatch={props.dispatch} 
      newPostText={props.profilePage.newPostText}
      />
    </div>
  )
}

export default Profile;