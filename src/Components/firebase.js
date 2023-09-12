// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyBAaPIlLF-Tp2-6SJfan-HEbN1n7lzySrk',
  authDomain: 'planner-411a2.firebaseapp.com',
  projectId: 'planner-411a2',
  storageBucket: 'planner-411a2.appspot.com',
  messagingSenderId: '180264271405',
  appId: '1:180264271405:web:467f7f50b42c7d567e02a4',
  measurementId: "G-QFGWJ1TSD3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}
