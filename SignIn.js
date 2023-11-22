import React, { useState } from 'react';

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Sign In:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button type="submit">Submit
