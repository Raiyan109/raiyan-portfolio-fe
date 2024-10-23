import { Navigate, Outlet } from "react-router-dom";

// Function to check if the user is authenticated
const isAuthenticated = () => {
    // Check if token exists in localStorage (or use a more advanced method like context)
    return !!localStorage.getItem('userInfo');
};

const ProtectedRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
