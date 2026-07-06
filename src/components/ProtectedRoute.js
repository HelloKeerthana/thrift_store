import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const email = localStorage.getItem('loggedInUser');
  if (!email) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
