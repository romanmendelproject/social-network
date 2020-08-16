import { getAuthData } from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
  initialized: false
};

type InitialStateType = typeof initialState;

type InitializedType = {
  type: typeof SET_INITIALIZED,
}

const appReducer = (state: InitialStateType = initialState, action:InitializedType): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      }
    }
    default:
      return state;

  }
}

export const setinitialize = () => ({
  type: SET_INITIALIZED,
});

export const initialize = () => (dispatch:any) => {
  let promise = dispatch(getAuthData())
  Promise.all([promise]).then (() =>{
    dispatch(setinitialize())
  })
  
}

export default appReducer;

