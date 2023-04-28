import {UserRegister} from '../models/UserRegister';
import {UserLogin} from '../models/UserLogin';
import React, {createContext, useEffect, useReducer} from 'react';
import {authReducer, AuthState} from '../store/user/AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginUser, ModificarUser, RegisterUser} from '../services/APIS';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: any;
  status: 'checking' | 'auth' | 'no-auth';
  signUp: (data: UserRegister) => any;
  signIn: (data: UserLogin) => any;
  SignUpdate: (data: UserRegister) => any;
  logOut: () => void;
  removeError: () => void;
};

const authInicialState: AuthState = {
  status: 'checking',
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
    const data = await AsyncStorage.getItem('user');
    !data
      ? dispatch({type: 'no-auth'})
      : dispatch({
          type: 'signUp',
          payload: {
            user: JSON.parse(data),
          },
        });
  };

  const signUp = async (data: UserRegister) => {
    try {
      const user = await RegisterUser(data);
      dispatch({
        type: 'signUp',
        payload: {
          user: user,
        },
      });
    } catch (error: any) {
      dispatch({type: 'addError', payload: error});
    }
  };
  const SignUpdate = async (data: UserRegister) => {
    try {
      const user = await ModificarUser(data);
      dispatch({
        type: 'signUp',
        payload: {
          user: user,
        },
      });
    } catch (error: any) {
      dispatch({type: 'addError', payload: error});
    }
  };
  const signIn = async (data: UserLogin) => {
    try {
      const user = await LoginUser(data);
      dispatch({
        type: 'signUp',
        payload: {
          user: user,
        },
      });
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error: any) {
      dispatch({type: 'addError', payload: error});
    }
  };
  const logOut = async () => {
    await AsyncStorage.removeItem('user');
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
      value={{...state, signUp, signIn, logOut, removeError, SignUpdate}}>
      {children}
    </AuthContext.Provider>
  );
};
