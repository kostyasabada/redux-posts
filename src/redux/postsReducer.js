// const initialState = {
//   posts: [],
//   fetchedPosts: []
// };

import { CREATE_POST, FETCH_POST } from "./types";

export const postsReducer = (state = [], action) => {

  switch (action.type){
    case CREATE_POST:
      return [
        ...state,
        action.payload,
      ]
    default: return state;
  }
};

export const fetchedPostsReducer = (state = [], action) => {

  switch (action.type){
    case FETCH_POST:
      return action.payload;
    default: return state;
  }
}
