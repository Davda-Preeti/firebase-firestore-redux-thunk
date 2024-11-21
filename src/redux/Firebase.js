// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBVkdmodJhF3v15rPQBHqKUcoeZF4vpXb0",
  authDomain: "fir-b78d2.firebaseapp.com",
  projectId: "fir-b78d2",
  storageBucket: "fir-b78d2.appspot.com",
  messagingSenderId: "408701292317",
  appId: "1:408701292317:web:29ab81ff799c5ade8b1bf4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


const dbFirestore = getFirestore(app);

export default dbFirestore