import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './security/AuthProvider';

const PrivateRoute: React.FC = () => {
  const { userAuth } = useAuth();

  return userAuth?.auth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;