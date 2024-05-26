// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCowuW8H9JKuO423dQbSiA8bUedl3M154Y",
    authDomain: "library-app-924ee.firebaseapp.com",
    projectId: "library-app-924ee",
    storageBucket: "library-app-924ee.appspot.com",
    messagingSenderId: "726233521316",
    appId: "1:726233521316:web:e1dc9a7e5f005d23d15a31",
    measurementId: "G-DJZ9LM18VD"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app)
  const auth= getAuth(app)

  export {db ,auth}