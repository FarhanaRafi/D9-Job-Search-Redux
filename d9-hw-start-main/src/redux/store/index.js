import { configureStore, combineReducers } from "@reduxjs/toolkit";
import companyReducer from "../reducers/companyReducer";
import favoriteReducer from "../reducers/favoriteReducer";
import jobReducer from "../reducers/jobReducer";
import userReducer from "../reducers/userReducer";

const store = configureStore({
  reducer: combineReducers({
    favorites: favoriteReducer,
    company: companyReducer,
    job: jobReducer,
    user: userReducer,
  }),
});

export default store;
