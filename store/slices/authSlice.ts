import { createSlice,   } from "@reduxjs/toolkit";

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role?: "user" | "admin";
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// for login, logout, register, current user, authentication status

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: () => {},
    logout: () => {},
    register: () => {},
    currentUser: () => {},

    authenticationStatus: () => {},
  },
});

export const { login, logout, register, currentUser, authenticationStatus } =
  authSlice.actions;

export default authSlice.reducer;
