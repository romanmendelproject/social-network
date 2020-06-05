import React from 'react';
import s from './MyPosts.module.css';
import Post, { propsTypePost } from './Post/Post';

export type propsTypePosts = {
  postData: Array<propsTypePost>;
  newPostText: string;
  addPost: () => void;
  updateNewPostText: (newText:string) => void
}

const MyPosts = (props: propsTypePosts) => {
  let newPostElement:any = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost()
  }

  const onPostChange = () =>{
    props.updateNewPostText(newPostElement.current.value)
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
        <button onClick={addPost}>Add post</button>
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