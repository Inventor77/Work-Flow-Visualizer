import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBYrFRjXL57ddhTFbcDiZ97bI6tFo6qLWc",
  authDomain: "work-flow-visualizer.firebaseapp.com",
  projectId: "work-flow-visualizer",
  storageBucket: "work-flow-visualizer.appspot.com",
  messagingSenderId: "5610493242",
  appId: "1:5610493242:web:1341548645554704302c03",
});

export const db = app.firestore();
export default app;
