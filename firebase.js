// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';
import 'firebase/compat/storage'



const firebaseConfig = {
  apiKey: "AIzaSyCMtY7h_7WCc2_wrTBE7Mehv7HsHigqbCw",
  authDomain: "fullstackclone-fe57f.firebaseapp.com",
  projectId: "fullstackclone-fe57f",
  storageBucket: "fullstackclone-fe57f.appspot.com",
  messagingSenderId: "9837659118",
  appId: "1:9837659118:web:f47135e7ec070395fa44ff",
  measurementId: "G-ZX81GX3DB2"
};
const db = firebase.firestore();
const storage = firebase.storage()
export {db,storage };
