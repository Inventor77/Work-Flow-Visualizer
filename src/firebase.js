import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCITMhae04sLVImm08MuNE8XT7lSAkE1_A",
  authDomain: "vizz-fae49.firebaseapp.com",
  projectId: "vizz-fae49",
  storageBucket: "vizz-fae49.appspot.com",
  messagingSenderId: "874741298823",
  appId: "1:874741298823:web:f0461b2e22ff5000df6a22"
});

export const db = app.firestore();
export default app;
