"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("token");
        const userData = Cookies.get("user");

        if (token && userData) {
            try {
                setUser(JSON.parse(userData));
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Error parsing user data:", error);
                Cookies.remove("user"); // Remove corrupted data
            }
        }
    }, []);

    const login = (token, userData) => {
        Cookies.set("token", token, { expires: 7 }); // Store for 7 days
        Cookies.set("user", JSON.stringify(userData), { expires: 7 });

        setUser(userData);
        setIsAuthenticated(true);
        router.push("/dashboard");
    };

    const logoutAdmin = () => {
        Cookies.remove("token");
        Cookies.remove("user");
        setUser(null);
        setIsAuthenticated(false);
        router.push("/");
    };

    return (
        <AuthContext.Provider value={{ user, login, logoutAdmin, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
