import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyCCJcJnzN3bh4tFh1POxC_D9Sel3d7Yhqo",
  authDomain: "megastore-bb279.firebaseapp.com",
  databaseURL: "https://megastore-bb279-default-rtdb.firebaseio.com",
  projectId: "megastore-bb279",
  storageBucket: "megastore-bb279.appspot.com",
  messagingSenderId: "218547305187",
  appId: "1:218547305187:web:bdc6cff8a5d5a4d75ca3d6"
});

// var appConfig = {
//     apiKey: "AIzaSyCCJcJnzN3bh4tFh1POxC_D9Sel3d7Yhqo",
//     authDomain: "megastore-bb279.firebaseapp.com",
//     databaseURL: "https://megastore-bb279-default-rtdb.firebaseio.com",
//     projectId: "megastore-bb279",
//     storageBucket: "megastore-bb279.appspot.com",
//     messagingSenderId: "218547305187",
//     appId: "1:218547305187:web:bdc6cff8a5d5a4d75ca3d6"
//   };

//   firebase.initializeApp(appConfig);

export default app;