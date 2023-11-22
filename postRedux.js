const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    case 'ADD_POST':
      return [...state, action.payload];
    case 'ADD_COMMENT':
      return state.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            ...post,
            comments: [...post.comments, action.payload.comment],
          };
        }
        return post;
      });
    default:
      return state;
  }
};

export default postReducer;
