const initialState = {
  favorites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state,
          content: [...state.favorites.content, action.payload],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
