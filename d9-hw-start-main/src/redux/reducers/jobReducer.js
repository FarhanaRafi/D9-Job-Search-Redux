import { GET_JOBS, GET_ERROR, GET_LOADING } from "../actions";

const initialState = {
  jobDetails: [],
  isLoading: true,
  isError: false,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobDetails: action.payload,
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

export default jobReducer;
