import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgkXglfNdnP82GkbkO1qee-tJSrcePgFo",
  authDomain: "medical-store-16807.firebaseapp.com",
  projectId: "medical-store-16807",
  storageBucket: "medical-store-16807.appspot.com",
  messagingSenderId: "983561871040",
  appId: "1:983561871040:web:28edae98a34c9a0b4ed725"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;