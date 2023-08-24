import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const RequiresAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? children : <Navigate to="/Login" state={{ from: location }} />;
}; 