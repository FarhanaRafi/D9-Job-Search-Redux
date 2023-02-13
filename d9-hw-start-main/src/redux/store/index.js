import { configureStore, combineReducers } from "@reduxjs/toolkit";
import companyReducer from "../reducers/companyReducer";
import favoriteReducer from "../reducers/favoriteReducer";
import userReducer from "../reducers/userReducer";

const store = configureStore({
  reducer: combineReducers({
    favorites: favoriteReducer,
    company: companyReducer,
    user: userReducer,
  }),
});

export default store;
