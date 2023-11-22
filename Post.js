import React from 'react';
import CommentList from './CommentList';
import { useDispatch } from 'react-redux';
import { addComment } from '../actions/postActions';

function Post({ post }) {
  const dispatch = useDispatch();

  const handleCommentSubmit = (comment) => {
    dispatch(addComment(post.id, comment));
  };

  return (
    <div>
      <img src={post.url} alt={post.title} />
      <div>
        <button>Comment</button>
        <button>Share</button>
        <button>Save</button>
      </div>
      <CommentList comments={post.comments} />
    </div>
  );
}

export default Post;
