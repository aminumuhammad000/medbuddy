import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 'dashboard', // 'home', 'profile', 'orders',
  userInformation: "basic",
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