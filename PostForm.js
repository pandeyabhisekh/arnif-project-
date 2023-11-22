import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions/postActions';

function PostForm() {
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(newPost));
    setNewPost('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new post..."
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;
