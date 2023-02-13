import { configureStore, combineReducers } from "@reduxjs/toolkit";
import companyReducer from "../reducers/companyReducer";
import favoriteReducer from "../reducers/favoriteReducer";

const store = configureStore({
  reducer: combineReducers({
    favorites: favoriteReducer,
    company: companyReducer,
  }),
});

export default store;
