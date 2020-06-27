import React from 'react';
import s from './MyPosts.module.css';
import Post, { propsTypePost } from './Post/Post';

export type propsTypePosts = {
  postData: Array<propsTypePost>;
  newPostText: string;
  updateNewPostText: (text : string) => void;
  addPost: () => void;
}

const MyPosts = (props: propsTypePosts) => {
  let newPostElement: any = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}></textarea>
        </div>
        <button onClick={onAddPost}>Add post</button>
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