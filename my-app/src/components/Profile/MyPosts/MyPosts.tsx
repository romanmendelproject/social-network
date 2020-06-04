import React from 'react';
import s from './MyPosts.module.css';
import { propsType } from '../../../App';
import Post, { propsTypePost } from './Post/Post';

export type propsTypePosts = {
    postData: Array<propsTypePost>
}

const MyPosts = (props:propsTypePosts) => {

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {props.postData.map(p =>
          <Post message={p.message} id={p.id} likesCount={p.likesCount} />
        )
        }
      </div>
    </div>
  )

}

export default MyPosts;