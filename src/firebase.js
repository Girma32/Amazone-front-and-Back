import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyDkoQ42PMy8sNh0Z99Jn4h1ul9lCXtCTHo",
 authDomain: "e-clonegb.firebaseapp.com",
 projectId: "e-clonegb",
 storageBucket: "e-clonegb.appspot.com",
 messagingSenderId: "722869366956",
 appId: "1:722869366956:web:9864b9581486de4d3daf09",
 measurementId: "G-D7F1Y2BC68"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
