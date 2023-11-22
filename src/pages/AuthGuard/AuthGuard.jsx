import React from 'react';
import { Outlet, redirect } from 'react-router-dom';
import { getToken } from '../../utils/userutils';

export const authGuardLoader = () => {
  const isAuthenticated = getToken();
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
  const token = getToken();
  if (token) {
    return redirect('/')
  }
  return null;
}