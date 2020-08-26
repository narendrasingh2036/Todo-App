
import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyBcgzPyXHTiEYTmVqJ09J1CQ4mOp8_dVCg",
  authDomain: "todo-app-e88f4.firebaseapp.com",
  databaseURL: "https://todo-app-e88f4.firebaseio.com",
  projectId: "todo-app-e88f4",
  storageBucket: "todo-app-e88f4.appspot.com",
  messagingSenderId: "1008021594351",
  appId: "1:1008021594351:web:73a5fcff9efab88b86fb1a",
  measurementId: "G-9XR7TG7G3W"
});

const db=firebaseApp.firestore();

export default db;