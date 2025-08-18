import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

// Async thunk to fetch drugs from API
export const fetchDrugs = createAsyncThunk("drugs/fetchDrugs", async () => {
  const response = await axios.get("/drugs");
  return response.data;
});

const drugSlice = createSlice({
  name: "drugs",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    // You can add more reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrugs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDrugs.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchDrugs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default drugSlice.reducer;