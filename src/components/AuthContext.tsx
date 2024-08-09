import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
    auth: AuthState; // Include the auth state
    login: (role: string) => void; // login now takes a role argument
    logout: () => void;
}

type AuthState = {
    isAuthenticated: boolean;
    role: string | null; // Role can be either a string or null
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [auth, setAuth] = useState<AuthState>({
        isAuthenticated: false,
        role: null, // 'admin' or 'user'
    });

    const login = (role: string) =>
        setAuth({
            isAuthenticated: true,
            role: role,
        });
    const logout = () => {
        setAuth({
            isAuthenticated: false,
            role: null,
        });
    };
    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
