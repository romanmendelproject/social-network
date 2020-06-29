import { connect } from 'react-redux';
import Friends from './Friends';


let mapStateToProps = (state: any) => {
    return {
      friendsData: state.friends.friendsData,
    }
  }

  const FriendsContainer = connect(mapStateToProps)(Friends);
  
  export default FriendsContainer