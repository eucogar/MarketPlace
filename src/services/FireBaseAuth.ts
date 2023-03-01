import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../database/Firebase';
import {UserRegister} from '../models/UserRegister';
import {Alert} from 'react-native';
import {UserLogin} from '../models/UserLogin';

export const handleCreateAccount = (user: UserRegister) => {
  db.collection('Users')
    .add(user)
    .then()
    .catch(error => {
      Alert.alert(error.message);
    });
};

export const handleSingIn = (user: UserLogin): any => {
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then(userCredential => {
      Alert.alert('Logueado');
      console.log(userCredential);
      return userCredential.user;
    })
    .catch(error => {
      console.log(error);
      Alert.alert(error.message);
    });
};
