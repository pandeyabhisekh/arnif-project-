import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions/postActions';
import { signIn } from './actions/userActions';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import UserProfile from './components/UserProfile';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {user.username ? (
        <>
          <UserProfile />
          <PostForm />
          <PostList />
        </>
      ) : (
        <SignIn onSignIn={(username) => dispatch(signIn(username))} />
      )}
    </div>
  );
}

export default App;
