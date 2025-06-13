import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authReducer';

const store = configureStore({
  reducer:{
    auth: authReducer,
  }
})

export default store;