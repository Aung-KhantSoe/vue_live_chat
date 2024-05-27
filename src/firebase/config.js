import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWQ5xkqBWt8XzelimqFXFn6_laRWnnZto",
    authDomain: "vue-live-chat-room-7b6eb.firebaseapp.com",
    projectId: "vue-live-chat-room-7b6eb",
    storageBucket: "vue-live-chat-room-7b6eb.appspot.com",
    messagingSenderId: "613097107750",
    appId: "1:613097107750:web:8d8a2700bb3c1694dc11e7"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db,timestamp,auth};