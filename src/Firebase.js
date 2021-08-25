import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD--QFml3nql2U03oSPFx714pFEj-9eM3M",
  authDomain: "make-up-app-59b05.firebaseapp.com",
  projectId: "make-up-app-59b05",
  storageBucket: "make-up-app-59b05.appspot.com",
  messagingSenderId: "108859881560",
  appId: "1:108859881560:web:4ae2c2ff669ef414bdf22d",
});

export const auth = app.auth();
export default app;
