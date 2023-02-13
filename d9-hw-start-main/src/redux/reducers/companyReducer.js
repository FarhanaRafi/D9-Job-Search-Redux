import { GET_COMPANY } from "../actions";

const initialState = {
  stock: [],
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return {
        ...state,
        stock: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
