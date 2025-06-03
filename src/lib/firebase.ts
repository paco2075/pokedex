import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDvsXEmEesN7w00DcoNUtjkJAp0-h-HCB4",
  authDomain: "pokedex-ab331.firebaseapp.com",
  projectId: "pokedex-ab331",
  storageBucket: "pokedex-ab331.firebasestorage.app",
  messagingSenderId: "225099526241",
  appId: "1:225099526241:web:b48723b0f89ccc5cf1ba20"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
