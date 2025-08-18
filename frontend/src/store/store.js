import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authReducer';
import patientNavReducer from './slices/patientNavSlice';

const store = configureStore({
  reducer:{
    auth: authReducer,
    patientNav: patientNavReducer,
  }
})

export default store;