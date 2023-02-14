import { GET_COMPANY, GET_ERROR, GET_LOADING } from "../actions";

const initialState = {
  stock: [],
  isLoading: true,
  isError: false,
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return {
        ...state,
        stock: action.payload,
      };
    case GET_LOADING:
      return {
        ...state,
        isLoading: action.payload, // which is false when the books are fetched
      };

    case GET_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
