import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // NEW
  const [logo, setLogo] = useState(null);


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false); // Finished loading
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // backend থেকে logo ফেচ
  const fetchLogo = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/logo");

      // যদি ডাটাবেসে logo থাকে
      if (data && data.logoUrl) {
        setLogo(data.logoUrl);
        console.log("Fetched logo:", data.logoUrl);
      } else {
        console.log("No logo found in DB");
        setLogo(null); // fallback
      }
    } catch (error) {
      console.error("Error fetching logo:", error);
    }
  };
    useEffect(() => {
    fetchLogo();
  }, []);


  // While loading, don’t render children to prevent flicker
  if (loading) return null;

  return (
    <AuthContext.Provider
      value={{ user, login, logout, logo, setLogo, fetchLogo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
