import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles ,children }) => {
    const { user, isLoading ,isAuthChecked } = useAuth();

    if (isLoading || !isAuthChecked) {
      return <div>Loading...</div>; 
    }

  
    if (!user) {
      return <Navigate to="/login" replace />; 
    }
  
    if (allowedRoles && !allowedRoles.includes(user.role)) {
      return <Navigate to="/unauthorized" replace />; 
    }
  
    return children;
  };
  
  export default ProtectedRoute;