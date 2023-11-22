export const fetchPosts = () => {
  // Dummy API call to fetch posts
  return async (dispatch) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      dispatch({ type: 'FETCH_POSTS', payload: data });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
};

export const addPost = (newPost) => {
  return { type: 'ADD_POST', payload: newPost };
};

export const addComment = (postId, comment) => {
  return { type: 'ADD_COMMENT', payload: { postId, comment } };
};
