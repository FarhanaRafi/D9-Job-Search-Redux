import { GET_JOBS } from "../actions";

const initialState = {
  jobDetails: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobDetails: action.payload,
      };

    default:
      return state;
  }
};

export default jobReducer;
