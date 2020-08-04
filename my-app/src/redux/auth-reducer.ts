import { usersAPI } from "../api/api";


const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: 0,
  email: '',
  login: '',
  isFetching: false,
  isAuth: false
};

type InitialStateType = typeof initialState;


type AuthUserDataType = {
  userId: number,
  email: string,
  login: string,
  isFetching: boolean,
  isAuth: boolean
};

type AuthUserType = {
  type: typeof SET_USER_DATA,
  data: AuthUserDataType
};

const authReducer = (state: InitialStateType = initialState, action: AuthUserType): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }
    default:
      return state;

  }
}

export const setAuthUserData = (email: string, userId: Number, login: string) => ({
  type: SET_USER_DATA,
  data: { email, userId, login },
});

export const getAuthData = () => {
  return (dispatch: any) => {
    usersAPI.getAuthMe().then(data => {
      if (data.resultCode === 0){
          let {email,id, login} = data.data;
          dispatch(setAuthUserData(email,id, login));
      }
  });

  }
}

export default authReducer;

