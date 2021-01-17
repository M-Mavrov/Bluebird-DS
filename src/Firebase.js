import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
const app = firebase.initializeApp({
  apiKey: "AIzaSyBgSOG9YQ8sFgaBFratu92YaNGQBrRsmB0",
  authDomain: "bluebird-ds.firebaseapp.com",
  databaseURL: "https://bluebird-ds.firebaseio.com",
  projectId: "bluebird-ds",
  storageBucket: "bluebird-ds.appspot.com",
  messagingSenderId: "986938473366",
  appId: "1:986938473366:web:e2f0601b88015051d3bbb7",
  measurementId: "G-SBJT38LBLR",
});
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
export const auth = app.auth();
export const firestore = app.firestore();
export default app;
