import { ProfileType } from "../components/Profile/Profile";
import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

type AddPostActionType = {
  type: typeof ADD_POST,
  newPostText: string
};

type setUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}

type setStatusType = {
  type: typeof SET_STATUS,
  status: string
}

type ProfileActionType = AddPostActionType
  | setUserProfileActionType
  | setStatusType

let initialState = {
  postData: [
    { id: 1, message: "111111111", likesCount: 12 },
    { id: 2, message: "222222222", likesCount: 11 },
    { id: 3, message: "333333333", likesCount: 2 },
    { id: 4, message: "444444444", likesCount: 1 },
    { id: 5, message: "444444444", likesCount: 55 },
  ],
  profile: {
    userId: 0,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    contacts: {},
    photos: {},
  },
  status: ''
};

type InitialStateType = typeof initialState;

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostActionCreater = (newPostText:string) => ({
  type: ADD_POST,
  newPostText
});

export const setUserProfile = (profile: ProfileType) => ({
  type: SET_USER_PROFILE,
  profile
});

export const setStatus = (status: string) => ({
  type: SET_STATUS,
  status
});

export const getProfile = (userId: number) => {
  return (dispatch: any) => {
    usersAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  }
}

export const getStatus = (userId: number) => {
  return (dispatch: any) => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data));
    });
  }
}

export const updateStatus = (status: string) => {
  return (dispatch: any) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  }
}

export default profileReducer;
