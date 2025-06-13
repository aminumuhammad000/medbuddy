import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  user: {
  role: 'patient',
  email: '',
  name: '',
  phone: '',
  nhis: '',
  licenseNo: '',
},
  authMode: 'register', // 'login' or 'register'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.user.role = action.payload;
    },
    login: (state, action) => {
      state.isLogged = true;
      state.user = { ...state.user, ...action.payload };
    },
    logout: (state) => {
      state.isLogged = false;
      state.user = { role: state.user.role, email: '' };
    },
     setAuthMode(state, action) {
      state.authMode = action.payload; // 'login' or 'register'
    }
  },
});

export const { setRole, login, logout, setAuthMode } = userSlice.actions;
export default userSlice.reducer;
