import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBpnyAOhGRyzO7o20nBhoVSnsEFg11cUFY",
  authDomain: "visualiser-83148.firebaseapp.com",
  projectId: "visualiser-83148",
  storageBucket: "visualiser-83148.appspot.com",
  messagingSenderId: "216546935300",
  appId: "1:216546935300:web:b2c36d405023301de02b51",
});

export const db = app.firestore();
export default app;
