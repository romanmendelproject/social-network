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
  addPost: () => void,
  updateNewPostText: (newText:string) => void,
  
  
}
const Profile = (props: propsTypePostsState) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.profilePage.postData} 
      addPost={props.addPost} 
      newPostText={props.profilePage.newPostText}
      updateNewPostText={props.updateNewPostText}
      />
    </div>
  )
}

export default Profile;