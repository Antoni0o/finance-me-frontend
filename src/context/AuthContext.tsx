import { useToast } from "@chakra-ui/toast";
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
  getUserData: () => User;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

type AuthResponse = {
  user: {
    id: string;
    email: string;
  },
  token: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuxProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const toast = useToast();

  async function signIn(email: string, password: string) {
    await api.post<AuthResponse>('/auth/login', {
      email,
      password
    })
    .then(async (res) => {
      const { user, token } = res.data;

      localStorage.setItem('@financeme:token', token);

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      await api.get(`/users/${user.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        setUser(res.data);
      }); 

      router.push('/home');
    })
    .catch((err) => {
      toast({
        title: 'Email e/ou senha incorreto(s)!',
        status: 'error',
        isClosable: true,
        position: 'top-right'
      })
    });
  }

  function signOut() {
    router.push('/');

    setUser(null);

    localStorage.removeItem('@todoapp:token');
  }

  function getUserData() {
    return user;
  }

  useEffect(() => {
    const token = localStorage.getItem('@todoapp:token');

    if(token && token != 'undefined') {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get('/users/token').then(res => {
        setUser(res.data.result.user);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, getUserData, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}