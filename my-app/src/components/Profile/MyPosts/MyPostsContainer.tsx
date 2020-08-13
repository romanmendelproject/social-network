import { addPostActionCreater,} from '../../../redux/profile-reducer';
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
    addPost: (newPostText:string) => {
      dispatch(addPostActionCreater(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer