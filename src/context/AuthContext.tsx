import { useRouter } from "next/router";
import React, { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../api";
import { User } from "../types/User";

type AuxProps = {
  children: ReactNode;
}

type AuthContextData = {
  signed: boolean;
  user: User | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

type AuthResponse = {
  user: {
    id: string;
    email: string;
  },
  token: string;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = (props: AuxProps) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storagedToken = sessionStorage.getItem('@financeme:token');
    const storagedUser = sessionStorage.getItem('@financeme:user');

    if(storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function signIn(email: string, password: string) {
    const res = await api.post<AuthResponse>('/auth/login', {
      email,
      password
    })

    const { user, token } = res.data;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    sessionStorage.setItem('@financeme:token', token);
    sessionStorage.setItem('@financeme:user', JSON.stringify(user));


    setUser(user);

    router.push('/home');
  }

  function signOut() {
    router.push('/');

    setUser(null);

    sessionStorage.removeItem('@financeme:token');
    sessionStorage.removeItem('@financeme:user')
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}