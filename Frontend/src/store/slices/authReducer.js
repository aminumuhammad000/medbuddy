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
  loading: false,
  error: '',
  success: '',
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
      state.user = {
        role: 'patient',
        email: '',
        name: '',
        phone: '',
        nhis: '',
        licenseNo: '',
      };
    },
    setAuthMode(state, action) {
      state.authMode = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    clearStatus: (state) => {
      state.error = '';
      state.success = '';
      state.loading = false;
    },
  },
});

export const {
  setRole,
  login,
  logout,
  setAuthMode,
  setLoading,
  setError,
  setSuccess,
  clearStatus,
} = userSlice.actions;
export default userSlice.reducer;