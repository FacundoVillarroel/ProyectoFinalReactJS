// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTKkQ9KUgHLP_ybILBuYrML8Jp_BCd8MQ",
    authDomain: "projectofinalreactjs.firebaseapp.com",
    projectId: "projectofinalreactjs",
    storageBucket: "projectofinalreactjs.appspot.com",
    messagingSenderId: "331904185025",
    appId: "1:331904185025:web:3a829abb3d1d821b31da40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)