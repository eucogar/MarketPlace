// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import firebase from 'firebase/compat';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyB3nIdInc-35-gg3E9i2d1Nb4bMd2QYCwE',
  authDomain: 'marketplace-f7bf6.firebaseapp.com',
  projectId: 'marketplace-f7bf6',
  storageBucket: 'marketplace-f7bf6.appspot.com',
  messagingSenderId: '1008562435962',
  appId: '1:1008562435962:web:2d5c3b78a5fb3e8e9388c3',
  measurementId: 'G-ZR0SCELQZ2',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/*
firebase
  .firestore()
  .settings({experimentalForceLongPolling: true, merge: true}); //add this..
*/

export {auth};
