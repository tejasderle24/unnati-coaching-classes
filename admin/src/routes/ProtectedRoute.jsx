import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>; // Add a proper loading spinner
  }
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};
