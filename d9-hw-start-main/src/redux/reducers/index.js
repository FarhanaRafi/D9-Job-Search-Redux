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
          ...state.favorites,
          content: [...state.favorites.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [
            ...state.favorites.content.slice(0, action.payload),
            ...state.favorites.content.slice(action.payload + 1),
          ],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
