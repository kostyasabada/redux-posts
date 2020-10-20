import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';

export default function Posts() {

  const posts = useSelector(state => state.posts);
  console.log(posts);
  
  return (
    <>
      {(!posts.length) &&
        (<p className="text-center">No posts</p>)
      }
      <div>
        {posts.map(post =>
          <Post
            key={post.id}
            post={post}
          />
          )}
      </div>
    </>
  );
};