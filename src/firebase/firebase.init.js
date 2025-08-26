// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyATfvk1dYGAF9ZqewfSqb0xPk4nClTSDWE',
  authDomain: 'coffe-store-6692e.firebaseapp.com',
  projectId: 'coffe-store-6692e',
  storageBucket: 'coffe-store-6692e.firebasestorage.app',
  messagingSenderId: '589025026309',
  appId: '1:589025026309:web:c85a3f1bdaccd49bea976c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
