import { UserType } from "./UserType";

export interface AuthContextData {
  userAuth: AuthenticationType | null;
  signIn(data: AuthenticationType): void;
  checkLogin (): boolean;
  setToken (user : string, password : string): any;
  logout (): void;
}
export type AuthenticationType = {
  user: UserType | null;
  auth: boolean;
  token: string | null;
};

export interface AuthProviderType {
  children: any;
}
