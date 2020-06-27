import React from 'react';
import { propsTypePost } from './Post/Post';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

export type propsTypePostsContainer = {
  store:any
}

const MyPostsContainer = (props: propsTypePostsContainer) => {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreater());
  }

  const onPostChange = (text: string) => {
    let action = updateNewPostTextActionCreater(text);
    props.store.dispatch(action);
  }

  return ( <MyPosts
  updateNewPostText = {onPostChange} 
  addPost = {addPost} 
  postData={state.profilePage.postData}
  newPostText = {state.profilePage.newPostText}
  />

  )

}

export default MyPostsContainer;