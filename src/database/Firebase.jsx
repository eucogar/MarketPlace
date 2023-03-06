// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import 'firebase/firestore';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBbjkWp8w-zQZ9_N-BuAPZxzcWOhk2Vqr0',
  authDomain: 'marketplace-bd4f9.firebaseapp.com',
  projectId: 'marketplace-bd4f9',
  storageBucket: 'marketplace-bd4f9.appspot.com',
  messagingSenderId: '695668526921',
  appId: '1:695668526921:web:a230d598456eaee6a15498',
  measurementId: 'G-2WP6L29HMM',
};

initializeApp(firebaseConfig);
const database = getFirestore();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/*
firebase
  .firestore()
  .settings({experimentalForceLongPolling: true, merge: true}); //add this..
*/
export {auth, database};
