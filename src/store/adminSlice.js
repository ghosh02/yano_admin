import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://yano-backend.onrender.com/api/userdoctor/signup";

export const createAdmin = createAsyncThunk(
  "admin/settings/adminList/createAdmin",
  async (adminData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, adminData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: null,
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(createAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.successMessage = "Role successfully created";
      })
      .addCase(createAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create a new admin";
      });
  },
});

export const { clearState } = adminSlice.actions;

export default adminSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const API_URL = "https://yano-backend.onrender.com/api/userdoctor/signup";

// export const createAdmin = createAsyncThunk(
//   "admin/settings/adminList/createAdmin",
//   async (adminData, { rejectWithValue }) => {
//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(adminData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Server error");
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const adminSlice = createSlice({
//   name: "admin",
//   initialState: {
//     admin: null,
//     loading: false,
//     error: null,
//     successMessage: null,
//   },
//   reducers: {
//     clearState: (state) => {
//       state.loading = false;
//       state.error = null;
//       state.successMessage = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createAdmin.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.successMessage = null;
//       })
//       .addCase(createAdmin.fulfilled, (state, action) => {
//         state.loading = false;
//         state.admin = action.payload;
//         state.successMessage = "Role successfully created";
//       })
//       .addCase(createAdmin.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to create a new admin";
//       });
//   },
// });

// export const { clearState } = adminSlice.actions;

// export default adminSlice.reducer;
