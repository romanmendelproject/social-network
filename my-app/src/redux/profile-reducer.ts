const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type AddPostActionType = {
  type: typeof ADD_POST
};

type UpdateNewPostTextActionType = {
  type: typeof UPDATE_NEW_POST_TEXT,
  newText: string
}

type ProfileActionType = AddPostActionType | UpdateNewPostTextActionType

let initialState = {
  postData: [
    { id: 1, message: "111111111", likesCount: 12 },
    { id: 2, message: "222222222", likesCount: 11 },
    { id: 3, message: "333333333", likesCount: 2 },
    { id: 4, message: "444444444", likesCount: 1 },
    { id: 5, message: "444444444", likesCount: 55 },
  ],
  newPostText: "Hello1",
};

type InitialStateType = typeof initialState;

const profileReducer = (state:InitialStateType = initialState, action : ProfileActionType):InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, newPost],
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    default:
      return state;
  }
};

export const addPostActionCreater = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreater = (text: string) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
