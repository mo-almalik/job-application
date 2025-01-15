import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCheckAuthQuery } from '../features/authApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const { data, isLoading, isError, isSuccess } = useCheckAuthQuery();

  useEffect(() => {
    if (isSuccess && data) {
      setUser(data?.data); 
      setIsAuthChecked(true); 
    } else if (isError) {
      setUser(null); 
      setIsAuthChecked(true); 
    }
  }, [data, isError, isSuccess]);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, isAuthChecked }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);