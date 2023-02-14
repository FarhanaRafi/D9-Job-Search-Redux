import { configureStore, combineReducers } from "@reduxjs/toolkit";
import companyReducer from "../reducers/companyReducer";
import favoriteReducer from "../reducers/favoriteReducer";
import jobReducer from "../reducers/jobReducer";
import userReducer from "../reducers/userReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  storage: localStorage,
  key: "root",
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENV_SECRET_KEY,
    }),
  ],
};

const combinedReducer = combineReducers({
  favorites: favoriteReducer,
  company: companyReducer,
  job: jobReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
