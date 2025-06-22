import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRouteProps {
  roles?: string[];
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ roles, children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/login" />;
  if (roles && (!user.role || !roles.includes(user.role))) {
    return <Navigate to="/no-access" />;
  }
  return children;
};

export default PrivateRoute;
