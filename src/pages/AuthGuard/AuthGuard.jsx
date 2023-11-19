import React from 'react';
import { Navigate } from 'react-router-dom';
const AuthGuard = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true}/>;
  }
  return <>{children}</>;
}; 

export function LoginGuard({ children }) {
  const isAuthenticated = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (isAuthenticated) return <Navigate to="/" replace={true}/>;
  return <>{children}</>;
}

export default AuthGuard;