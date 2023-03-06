import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../database/Firebase';
import {UserRegister} from '../models/UserRegister';
import {Alert} from 'react-native';
import {UserLogin} from '../models/UserLogin';
import {database} from '../database/Firebase';
import {collection, addDoc} from 'firebase/firestore';

export const handleCreateAccount = async (user: UserRegister) => {
  try {
    const response = await addDoc(collection(database, 'users'), user);
    console.log('registrado');
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleSingIn = async (user: UserLogin) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );
    return response;
  } catch (error) {
    console.log(error);
    Alert.alert(error as string);
  }
};
