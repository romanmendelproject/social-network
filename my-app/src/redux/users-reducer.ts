import { typeUser } from "../components/Users/Users";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 0,
      followed: false,
      name: '',
      status: '',
      location: {},
      photos: {},
    }
  ],
  pageSize: 5,
  totalUsersCount: 0
};

type InitialStateType = typeof initialState;

type FollowActionType = {
  type: typeof FOLLOW
  userId: number
};

type UnFollowActionType = {
  type: typeof UNFOLLOW
  userId: number
};

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<typeUser>
};

type UsersActionTypes =
SetUsersActionType
  | FollowActionType
  | UnFollowActionType

const usersReducer = (state: InitialStateType = initialState, action: UsersActionTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followAC = (userId: Number) => ({
  type: FOLLOW,
  userId,
});

export const unfolowAC = (userId: Number) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersAC = (users: Array<typeUser>) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;

