import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
	apiKey: "AIzaSyCskJgcGg6243wxjBU6Ojrw5cSg3B8s6D0",
	authDomain: "work-flow-5c6c1.firebaseapp.com",
	projectId: "work-flow-5c6c1",
	storageBucket: "work-flow-5c6c1.appspot.com",
	messagingSenderId: "196968450187",
	appId: "1:196968450187:web:1f37a822eae2b1817eec8e",
});

export const db = app.firestore();
export default app;
