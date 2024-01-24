import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCmcw7Xj97Fj59x3q2r_94NmLDpigayH1E",
  authDomain: "investigacion-48a65.firebaseapp.com",
  databaseURL: "https://investigacion-48a65-default-rtdb.firebaseio.com",
  projectId: "investigacion-48a65",
  storageBucket: "investigacion-48a65.appspot.com",
  messagingSenderId: "388088012114",
  appId: "1:388088012114:web:3c6d848d4937a0daa1ee8b",
  measurementId: "G-16Z6MM1SB1"
};

export const firebase = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase


/*import firebase from "firebase/app"




export default firebase.initializeApp(firebaseConfig);*/