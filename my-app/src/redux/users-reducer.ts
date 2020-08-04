import { typeUser } from "../components/Users/Users";
import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";

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
  isFetching: false,
  followingInProgress: [1]
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

type toogleIsFetchingType = {
  type: typeof TOOGLE_IS_FETCHING
  isFetching: boolean
};

type toogleFollowingProgressType = {
  type: typeof TOOGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
};



type UsersActionTypes =
  SetUsersActionType
  | FollowActionType
  | UnFollowActionType
  | SetCurrentPageType
  | SetTotalUserCountType
  | toogleIsFetchingType
  | toogleFollowingProgressType

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
    case TOOGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      };
    }
    default:
      return state;
  }
};

export const follow = (userId: number) => ({
  type: FOLLOW,
  userId,
});

export const unfollow = (userId: number) => ({
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

export const toogleFollowingProgress = (isFetching: boolean, userId: number) => ({
  type: TOOGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toogleIsFetching(false))
      dispatch(setUsers(data.items))
      // this.props.setTotalUsersCount(response.data.totalCount);
    })
  }
}

export const followUsers = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toogleFollowingProgress(true, userId))
    usersAPI.unfollowUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId))
      }
      dispatch(toogleFollowingProgress(false, userId))
    });

  }
}

export const unfollowUsers = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toogleFollowingProgress(true, userId))
    usersAPI.followUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(userId))
      }
      dispatch(toogleFollowingProgress(false, userId))
    });

  }
}

export default usersReducer;

