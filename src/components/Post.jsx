import React from 'react';
import PropTypes from 'prop-types';

export const Post = ({ post }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">
        {post.title}
      </h5>
    </div>
  </div>
);

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
