import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpfGT4L_sCt0KBkA8hxzpBkhtu7CpfV7c",
  authDomain: "whatsapp-e67a1.firebaseapp.com",
  projectId: "whatsapp-e67a1",
  storageBucket: "whatsapp-e67a1.appspot.com",
  messagingSenderId: "981675096831",
  appId: "1:981675096831:web:7db7afe4fcd6c3d970eaca",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
