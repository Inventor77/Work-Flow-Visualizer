import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBiIBvUxZoDbAcZ4neA2HHyXUDYUrqif8o",
  authDomain: "mindmap-f5e95.firebaseapp.com",
  projectId: "mindmap-f5e95",
  storageBucket: "mindmap-f5e95.appspot.com",
  messagingSenderId: "335186401350",
  appId: "1:335186401350:web:e2d942657edc1fcb9f1247"
});

export const db = app.firestore();
export default app;
