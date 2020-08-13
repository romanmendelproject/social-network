import React from 'react';
import s from './MyPosts.module.css';
import Post, { propsTypePost } from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLenghtCreator } from '../../../utils/validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControls';

export type propsTypePosts = {
  postData: Array<propsTypePost>;
  newPostText: string;
  addPost: (newPostText: string) => void;
}

const MyPosts = (props: propsTypePosts) => {
  let newPostElement: any = React.createRef();

  let onAddNewPost = (values: any) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostFormRedux onSubmit={onAddNewPost} />
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

const maxLenght10 = maxLenghtCreator(10)

const AddPostForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText" placeholder='Enter your post text' validate={[required, maxLenght10]}/>
      </div>
      <button>Add post</button>
    </form>
  )
}

const AddPostFormRedux = reduxForm({ form: 'profileNewPostForm' })(AddPostForm)

export default MyPosts;