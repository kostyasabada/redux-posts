import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';

export default function FetchedPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.fetchedPosts);
  const loading = useSelector(state => state.app.loading)
  console.log(posts.length);

  return (
    <>
      {loading && (
        <div class="spinner-border text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )}
      {(!posts.length && !loading) &&
        (<button
          className="btn btn-primary"
          onClick={() => dispatch(fetchPosts())}
        >
          Load
        </button>)
      }
      <div>
        {posts.map(post => {
          console.log(post);
          return <Post
          key={post.id}
          post={post}
        />
        }

          )}
      </div>
    </>
  );
};