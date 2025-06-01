import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA8cCCexjrl4PfautXOQ91MHOLDj2v55Ec",
  authDomain: "pokedex-9214f.firebaseapp.com",
  projectId: "pokedex-9214f",
  storageBucket: "pokedex-9214f.firebasestorage.app",
  messagingSenderId: "927408652175",
  appId: "1:927408652175:web:10f6ae4147c6ff408c95fa"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
