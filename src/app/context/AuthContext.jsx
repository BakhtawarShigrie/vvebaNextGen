'use client';

import {createContext, useContext, useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({children}) {
 const [user, setUser] = useState(null);
 const [token, setToken] = useState(null);
 const [loading, setLoading] = useState(true);
 const router = useRouter();

 useEffect(() => {
  const storedUser = localStorage.getItem('user');
  const storedToken = localStorage.getItem('token');

  if (storedUser && storedToken) {
   setUser(JSON.parse(storedUser));
   setToken(storedToken);
  }

  setLoading(false);
 }, []);

 const login = (userData, authToken) => {
  localStorage.setItem('user', JSON.stringify(userData));
  localStorage.setItem('token', authToken);
  setUser(userData);
  setToken(authToken);
 };

 const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  setUser(null);
  setToken(null);
  router.replace('/login');
 };

 const isAuthenticated = () => {
  return !!user && !!token;
 };

 const hasRole = (role) => {
  return user?.role === role;
 };

 return (
  <AuthContext.Provider
   value={{
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated,
    hasRole,
   }}
  >
   {children}
  </AuthContext.Provider>
 );
}

export function useAuth() {
 return useContext(AuthContext);
}
