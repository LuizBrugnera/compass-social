import React, { createContext, useContext, useState } from 'react';
import { UserType } from './components/types/UserType';
interface AuthContextData {
  user: UserType | null;
  signIn(data: UserType): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderType {
  children: any
}

export const AuthProvider = ({ children } : AuthProviderType) => {
  const [user, setUser] = useState<UserType | null>(null);

  function signIn(data: UserType) {
    setUser(data);
  }

  return (
    <AuthContext.Provider value={{ user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}