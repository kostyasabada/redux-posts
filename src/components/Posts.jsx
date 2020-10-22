import React from 'react';
import { useSelector } from 'react-redux';
import { Post } from './Post';
import { PostForm } from './PostForm';

export const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <div className="container pt-3">
        <div className="row">
          <div className="col">
            <PostForm />
          </div>
        </div>

        {(!posts.length)
        && (<p className="text-center">No posts</p>)}
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>
    </>
  );
};
