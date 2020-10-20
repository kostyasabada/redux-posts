import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';

export default function FetchedPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.fetchedPosts);
  console.log(posts[0]);
  return (
    <>
      {(!posts.length) &&
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