// components/PrivateRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useLocation } from "react-router";


const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
    const location = useLocation();

  if (!user) return <Navigate to="/admin-login" state={location?.pathname}/>; // Not logged in
  return children;
};

export default PrivateRoute;
