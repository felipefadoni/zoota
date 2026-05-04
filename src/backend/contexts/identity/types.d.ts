export interface UserCredentials {
  email: string;
  passwordHash: string;
}

export type UserAuthenticated = {
  email: string;
  name: string;
  id: string;
  role: string;
  status: string;
  iat: number;
  exp: number;
};
