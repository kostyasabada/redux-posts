import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/actions';

export const PostForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };

    dispatch(createPost(newPost));

    setTitle('');
  };

  return (
    <form
      onSubmit={submitHandler}
    >
      <div className="form-group">
        <label htmlFor="title">Post title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <button
        className="btn btn-success"
        type="submit"
      >
        Create
      </button>
    </form>
  );
};
