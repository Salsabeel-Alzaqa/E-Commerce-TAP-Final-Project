import React from 'react';
import { Outlet, redirect } from 'react-router-dom';

export const authGuardLoader = () => {
  const isAuthenticated = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (!isAuthenticated) {
    return redirect('/login')
  }
  return null;
};

export const AuthGuard = () => {
  return (
    <Outlet />
  )
};

export const loginPageLoader = () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (token) {
    return redirect('/')
  }
  return null;
}