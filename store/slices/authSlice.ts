

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

// for login, logout, register, current user, authentication status