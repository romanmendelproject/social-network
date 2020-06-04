import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { propsTypePost } from './MyPosts/Post/Post';

export type propsTypePostsState = {
  state: {
    postData: Array<propsTypePost>
  }
}
const Profile = (props: propsTypePostsState) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.state.postData} />
    </div>
  )
}

export default Profile;