// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtWy_cMSyunNNVoZ0kjOPjjNSnJmcslbE",
  authDomain: "fir-auth-e9b0a.firebaseapp.com",
  projectId: "fir-auth-e9b0a",
  storageBucket: "fir-auth-e9b0a.appspot.com",
  messagingSenderId: "739303833203",
  appId: "1:739303833203:web:c87a9d7fcfd69cbfa5f406",
  measurementId: "G-8FNN4KQEBR"
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
    }


const auth = firebase.auth();

export {auth};
export default firebase;