import React, { createContext, useContext, useState } from "react";
import {
  AuthContextData,
  AuthProviderType,
  AuthenticationType,
} from "../components/types/AuthTypes";
import jwt_decode from "jwt-decode";
import { UserService } from "../components/services/UserService";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderType) => {

  const [userAuth, setUserAuth] = useState<AuthenticationType | null>(null);

  const NOMEAPP = "SOCIALCOMPASS";

  function signIn(data: AuthenticationType) {
    setUserAuth(data);
  }

  function checkLogin(): boolean {
    const authentication = localStorage.getItem(NOMEAPP + "/authentication");
    if (authentication) {
      const decoded: any = jwt_decode(authentication);
      if (Number(decoded.exp) <= Math.floor(new Date().getTime() / 1000)) {
        signIn({ auth: false, token: "", user: null });
        return false;
      } else {
        const user = {
          _id: decoded._id,
          name: decoded.name,
          email: decoded.email,
          user: decoded.user,
          birthdate: decoded.birthdate,
          profile_photo: decoded.profile_photo,
        }
        signIn({ auth: true, token: JSON.parse(authentication), user: user });
        return true;
      }
    } else {
      signIn({ auth: false, token: "", user: null });
      return false;
    }
  }

  async function setToken(user: string, password: string): Promise<any> {
    const token = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, password }),
    }).then((res) => res.json());
    if (token.response) {
      const decoded: any = jwt_decode(token.response);
      const userFetch = await UserService.getUser(token.response, decoded._id);

      localStorage.setItem(
        NOMEAPP + "/authentication",
        JSON.stringify(token.response)
      );
        console.log(token.response)
      signIn({ auth: true, token: token.response, user: userFetch });
      return token.response;
    }
    return null;
  }

  const logout = () => {
    localStorage.setItem(
      NOMEAPP + "/authentication",
      JSON.stringify({ auth: false, token: "", user: null })
    );
  };

  return (
    <AuthContext.Provider
      value={{ userAuth, signIn, logout, checkLogin, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
