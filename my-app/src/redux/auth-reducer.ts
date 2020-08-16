import { usersAPI, authAPI } from "../api/api";
import { stopSubmit } from "redux-form";


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
  isFetching?: boolean,
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
      }
    }
    default:
      return state;

  }
}

export const setAuthUserData = (email: string, userId: Number, login: string, isAuth: boolean) => ({
  type: SET_USER_DATA,
  data: { email, userId, login, isAuth },
});

export const getAuthData = () => {
  return (dispatch: any) => {
    authAPI.getAuthMe().then(data => {
      if (data.resultCode === 0) {
        let { email, id, login } = data.data;
        dispatch(setAuthUserData(email, id, login,true));
      }
    });

  }
}


export const login = (email: string, password: string, rememberMe: boolean) => {
  return (dispatch: any) => {
    authAPI.login(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(getAuthData())
      }
      else {
        
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        let action = stopSubmit("login", {_error: message})
        dispatch(action)
      }
    });

  }
}

export const logout = () => {
  return (dispatch: any) => {
    authAPI.logout().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData('', 0, '', false));
      }
    });

  }
}

export default authReducer;

