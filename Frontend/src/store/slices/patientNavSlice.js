import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 'dashboard',
  userInformation: "basic", // default page, e.g. 'home', 'profile', 'orders', etc.
};

const patientNavSlice = createSlice({
  name: 'patientNav',
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setInformation(state, action) {
      state.userInformation = action.payload;
    }
  },
});

export const { setPage, setInformation } = patientNavSlice.actions;
export default patientNavSlice.reducer;