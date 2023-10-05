// frontend/contexts/AuthContext.js
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Mocked login logic for the sake of this example
  const login = async (username, password) => {
    // You'd usually make an API request here
    if (username === "admin" && password === "password") {
      const userData = { id: 1, name: "Admin User" };
      setUser(userData);
      return userData;
    }
    throw new Error("Invalid username or password");
  };

  const logout = () => {
    // Clear the user data
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
