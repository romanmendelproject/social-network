import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { propsTypePost } from './MyPosts/Post/Post';
import MyPostsContainer from './MyPosts/MyPostsContainer';

// export type propsTypePostsState = {
//   profilePage: {
//     postData: Array<propsTypePost>;
//     newPostText: string
//   },
//   dispatch: (action: Object) => void;
// }
const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store = {props.store}
      />
    </div>
  )
}

export default Profile;