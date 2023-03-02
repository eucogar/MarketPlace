import {UserRegister} from '../models/UserRegister';
import {UserLogin} from '../models/UserLogin';
import React, {createContext, useEffect, useReducer} from 'react';
import {handleCreateAccount, handleSingIn} from '../services/FireBaseAuth';
import {authReducer, AuthState} from '../store/user/AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: any;
  status: 'checking' | 'auth' | 'no-auth';
  signUp: (data: UserRegister) => string;
  signIn: (data: UserLogin) => any;
  logOut: () => void;
  removeError: () => void;
};

const authInicialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, dispatch] = useReducer(authReducer, authInicialState);

  useEffect(() => {
    checkToken().then();
  }, []);

  const checkToken = async () => {
    const data = await AsyncStorage.getItem('token');
    !data
      ? dispatch({type: 'no-auth'})
      : dispatch({
          type: 'signUp',
          payload: {
            token: data as string,
            user: data,
          },
        });
  };

  const signUp = async (data: UserRegister) => {
    try {
      const response = await handleCreateAccount(data);
      const {user} = response;
      dispatch({
        type: 'signUp',
        payload: {
          token: response.user?.refreshToken as string,
          user: response.user,
        },
      });
    } catch (error: any) {
      dispatch({type: 'addError', payload: error?.error.toString()});
    }
  };
  const signIn = async (data: UserLogin) => {
    try {
      const response = await handleSingIn(data);
      const {user} = response;
      dispatch({
        type: 'signUp',
        payload: {
          token: user?.refreshToken as string,
          user: user,
        },
      });

      await AsyncStorage.setItem('token', user?.refreshToken as string);
    } catch (error: any) {
      dispatch({type: 'addError', payload: error?.error.toString()});
    }
  };
  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'loaded'});
    setTimeout(() => {
      dispatch({type: 'logout'});
    }, 1000);
  };
  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  return (
    <AuthContext.Provider
      value={{...state, signUp, signIn, logOut, removeError}}>
      {children}
    </AuthContext.Provider>
  );
};
