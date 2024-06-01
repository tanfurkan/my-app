'use client'
import {createContext, ReactNode, useEffect, useState} from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const MockAuthProvider = ({children}: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAuthenticated(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isAuthenticated) {
    return null
  }

  return (
    <AuthContext.Provider value={{isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};
