import { combineReducers } from "redux";
import { fetchedPostsReducer, postsReducer } from './postsReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  fetchedPosts: fetchedPostsReducer,
  app: appReducer,
})

console.log(rootReducer);
