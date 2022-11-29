import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../api';
import { User } from '../types/User';

type AuxProps = {
  children: ReactNode;
};

type AuthContextData = {
  signed: boolean;
  user: User | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuxProps) {
  const router = useRouter();
  const toast = useToast();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storagedToken = sessionStorage.getItem('@financeme:token');
    const storagedUser = sessionStorage.getItem('@financeme:user');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const res = await api.post('/auth/login', {
        email,
        password,
      });

      const { user, token } = res.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      sessionStorage.setItem('@financeme:token', token);
      sessionStorage.setItem('@financeme:user', JSON.stringify(user));

      setUser(user);

      router.push('/home');
    } catch (e) {
      toast({
        title: 'Não foi possível entrar na conta',
        description: 'E-mail e/ou senha incorreto(s)!',
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });
    }
  }

  function signOut() {
    router.push('/');

    setUser(null);

    sessionStorage.removeItem('@financeme:token');
    sessionStorage.removeItem('@financeme:user');
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, signIn, signOut }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
