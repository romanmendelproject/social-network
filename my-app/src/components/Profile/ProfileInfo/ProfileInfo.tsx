import React from 'react';
import s from './ProfileInfo.module.css';
import { PropsType } from '../Profile';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props:PropsType) => {
if (!props.profile) {
  return <Preloader/>
}

  return (
    <div>

      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""/>
        <ProfileStatus status={'hello'}/>
      </div>

    </div>
  )
}

export default ProfileInfo;