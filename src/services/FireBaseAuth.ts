import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../database/Firebase';
import {UserRegister} from '../models/UserRegister';
import {Alert} from 'react-native';
import {UserLogin} from '../models/UserLogin';

export const handleCreateAccount = (user: UserRegister) => {
  db.collection('Users')
    .add(user)
    .then(response => {
      return response;
    })
    .catch(error => {
      Alert.alert(error.message);
    });
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
