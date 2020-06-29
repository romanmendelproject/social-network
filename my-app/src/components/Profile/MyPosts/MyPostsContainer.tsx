import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state: any) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostTextActionCreater(text))
    },
    addPost: () => {
      dispatch(addPostActionCreater())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer