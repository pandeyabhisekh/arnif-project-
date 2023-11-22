import React from 'react';

function CommentList({ comments }) {
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>{comment}</li>
      ))}
    </ul>
  );
}

export default CommentList;
