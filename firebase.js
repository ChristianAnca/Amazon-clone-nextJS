
// import firebase from "firebase";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyA7FUnshnqu5zjdnyJ-dDMG_T294qWM7pg",
//     authDomain: "clone-4de2d.firebaseapp.com",
//     projectId: "clone-4de2d",
//     storageBucket: "clone-4de2d.appspot.com",
//     messagingSenderId: "193022409846",
//     appId: "1:193022409846:web:45a8427618f54ada5ab357",
//     measurementId: "G-E61QXV947N"
//   };

import firebase from 'firebase'
 
const firebaseConfig = {
  apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
  authDomain: "todo-app-e3cf0.firebaseapp.com",
  projectId: "todo-app-e3cf0",
  storageBucket: "todo-app-e3cf0.appspot.com",
  messagingSenderId: "940016886081",
  appId: "1:940016886081:web:91686613f16b1b1f8001c0",
  measurementId: "G-JHPC7TP12K"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;