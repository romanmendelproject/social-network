import { typeUser } from "../components/Users/Users";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";

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
  totalUsersCount: 20,
  currentPage: 1,
  isFetching: false
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

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
};

type SetTotalUserCountType = {
  type: typeof SET_TOTAL_USER_COUNT
  totalUsersCount: number
};

type toogleIsFetching = {
  type: typeof TOOGLE_IS_FETCHING
  isFetching: boolean
};

type UsersActionTypes =
  SetUsersActionType
  | FollowActionType
  | UnFollowActionType
  | SetCurrentPageType
  | SetTotalUserCountType
  | toogleIsFetching

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
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USER_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case TOOGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const follow = (userId: Number) => ({
  type: FOLLOW,
  userId,
});

export const unfollow = (userId: Number) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users: Array<typeUser>) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

export const setTotalUsersCount = (totalUsersCount: number) => ({
  type: SET_TOTAL_USER_COUNT,
  totalUsersCount
});

export const toogleIsFetching = (isFetching: boolean) => ({
  type: TOOGLE_IS_FETCHING,
  isFetching
});


export default usersReducer;

