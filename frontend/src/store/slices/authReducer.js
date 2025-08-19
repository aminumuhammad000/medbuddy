import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

// REGISTER
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/register", payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
    }
  }
);

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/login", { email, password });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

// FORGOT PASSWORD
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/forgot", { email });
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to send OTP"
      );
    }
  }
);

// NEW RESEND OTP ACTION
export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/forgot", { email });
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to resend OTP"
      );
    }
  }
);

// VERIFY OTP
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ otp, email }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/verify-otp", { otp, email });
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "OTP verification failed"
      );
    }
  }
);

// UPDATE PASSWORD
export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/update-password", {
        email,
        password,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Password update failed"
      );
    }
  }
);

// UPDATE PROFILE
// export const updateProfile = createAsyncThunk(
//   "auth/updateProfile",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const res = await axios.put("/user/profile", payload);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(
//         err.response?.data?.message || "Profile update failed"
//       );
//     }
//   }
// );

// Update Personal Information

export const updatePersonalInfo = createAsyncThunk(
  "auth/updatePersonalInfo",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch("/user/personal-info", payload);
      return response.data; // assuming backend returns updated user
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Update failed");
    }
  }
);

// UPDATE ACCOUNT
export const updateAccount = createAsyncThunk(
  "auth/updateAccount",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.patch("/user/account", payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Account update failed"
      );
    }
  }
);

// UPDATE MEDICAL INFO
export const updateMedicalInfo = createAsyncThunk(
  "auth/updateMedicalInfo",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.patch("/user/medical-info", payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Medical info update failed"
      );
    }
  }
);

// GET USER PROFILE
export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth;

      const res = await axios.get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token here
        },
      });

      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch profile"
      );
    }
  }
);

// LOGIN WITH GOOGLE
export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async ({ credential, usertype }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/google-login", {
        credential,
        usertype,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Google login failed"
      );
    }
  }
);
const initialState = {
  isLogged: false,
  user: null,
  token: null,
  authMode: "login", // 'login', 'register', 'forgot', 'otp', 'setPassword'
  loading: false,
  error: "",
  success: "",
  otp: "",
  resendSuccess: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action) => {
      if (!state.user) state.user = {};
      state.user.usertype = action.payload;
    },
    setAuthMode: (state, action) => {
      state.authMode = action.payload;
      state.error = "";
      state.success = "";
    },
    logout: (state) => {
      state.isLogged = false;
      state.user = null;
      state.token = null;
      state.error = "";
      state.success = "";
    },
    clearStatus: (state) => {
      state.error = "";
      state.success = "";
      state.loading = false;
    },
    tokenFromStorage: (state, action) => {
      state.token = action.payload;
      state.isLogged = true;
    },
  },
  extraReducers: (builder) => {
    // REGISTER
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isLogged = true;
        state.success = "Registration successful!";
        state.error = "";

        state.token = action.payload.token; // add this
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = "";
      });

    // LOGIN
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isLogged = true;
        state.success = action.payload.message || "Login successful!";
        state.error = "";

        state.token = action.payload.token; // add this
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = "";
      });

    // FORGOT PASSWORD
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = "";
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.otp = action.payload.otp;
        state.success = action.payload.message || "OTP sent!";
        state.error = "";
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = "";
      });

    // RESEND OTP
    builder
      .addCase(resendOtp.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.resendSuccess = "";
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.resendSuccess =
          action.payload.message || "OTP resent successfully!";
        state.error = "";
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.resendSuccess = "";
      });

    // VERIFY OTP
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = "";
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message || "OTP verified!";
        state.error = "";
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = "";
      });

    // UPDATE PASSWORD
    builder
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = "";
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message || "Password updated!";
        state.error = "";
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = "";
      });

    // Update Personal Information
    builder
      .addCase(updatePersonalInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.error = "";
        state.success = "";
      })
      .addCase(updatePersonalInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.success = action.payload.message || "Profile updated!";
        state.error = "";
      })
      .addCase(updatePersonalInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = "";
      });

    // UPDATE ACCOUNT
    builder
      .addCase(updateAccount.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = "";
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = action.payload.message || "Account updated!";
        state.error = "";
      })
      .addCase(updateAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = "";
      });

    // UPDATE MEDICAL INFO
    builder
      .addCase(updateMedicalInfo.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = "";
      })
      .addCase(updateMedicalInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.success = action.payload.message || "Medical info updated!";
        state.error = "";
      })
      .addCase(updateMedicalInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = "";
      });

    // GET PROFILE
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = "";
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      // Google Login
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = "";
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLogged = true;
        state.success = "Login successful!";

        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { tokenFromStorage, setRole, setAuthMode, logout, clearStatus } =
  authSlice.actions;
export default authSlice.reducer;
