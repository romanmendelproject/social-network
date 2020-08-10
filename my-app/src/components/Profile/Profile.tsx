import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

export type PropsType = {
  profile: ProfileType,
  status: string,
  updateStatus: (status: string) => void,
}


export type ContactsType = {
  github: string,
  vk: string,
  facebook: string,
  instagram: string,
  twitter: string,
  website: string,
  youtube: string,
  mainLink: string,
}

export type PhotosType = {
  small: string,
  large: string
}

export type ProfileType = {
  userId: number,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  contacts: ContactsType,
  photos: PhotosType,
}


const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;