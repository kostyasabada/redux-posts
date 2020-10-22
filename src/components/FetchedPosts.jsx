import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { Post } from './Post';

export const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  return (
    <>
      <div className="container pt-3">
        <div className="row">
          <div className="col">

            {loading && (
            <div
              className="spinner-border text-warning"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
            )}
            {(!posts.length && !loading)
        && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(fetchPosts())}
        >
          Load
        </button>
        )}
            <div>
              {posts.map((post) => (
                <Post
                  key={post.id}
                  post={post}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
