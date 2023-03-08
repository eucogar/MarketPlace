import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, database} from '../database/Firebase';
import {UserRegister} from '../models/UserRegister';
import {Alert} from 'react-native';
import {UserLogin} from '../models/UserLogin';
import {collection, addDoc} from 'firebase/firestore';

export const handleCreateAccount = async (user: UserRegister) => {
  try {
    await addDoc(collection(database, 'user'), user);
    console.log('registrado');
    Alert.alert('registrado');
  } catch (error) {
    Alert.alert(error as string);
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
