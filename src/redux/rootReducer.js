import { combineReducers } from "redux";
import { fetchedPostsReducer, postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  fetchedPosts: fetchedPostsReducer,
})

console.log(rootReducer);
