import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, UserState } from "../../types/UserTypes";

const initialState: UserState = {
  users: [],
  filteredUsers: [],
  status: "idle",
  error: null,
  filter: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      const filterName = state.filter.name.toLowerCase();
      const filterUsername = state.filter.username.toLowerCase();
      const filterEmail = state.filter.email.toLowerCase();
      const filterPhone = state.filter.phone.toLowerCase();

      state.filteredUsers = state.users.filter(
        (user) =>
          (user.name.toLowerCase().includes(filterName) || filterName === "") &&
          (user.username.toLowerCase().includes(filterUsername) ||
            filterUsername === "") &&
          (user.email.toLowerCase().includes(filterEmail) ||
            filterEmail === "") &&
          (user.phone.toLowerCase().includes(filterPhone) ||
            filterPhone === ""),
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { setFilter } = userSlice.actions;

export default userSlice.reducer;