// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzTbOO5LDYxZXs7lYHOHQfyZioLR5Y9eQ",
  authDomain: "expensetmd.firebaseapp.com",
  projectId: "expensetmd",
  storageBucket: "expensetmd.appspot.com",
  messagingSenderId: "14681456026",
  appId: "1:14681456026:web:c09510182fad7054684e23",
  measurementId: "G-20JHM6NHD0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
