import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBxuTR6Hp4UHQ_cC08neXQ8UjmDnBVfpB8",
  authDomain: "affordmed-3d2b5.firebaseapp.com",
  projectId: "affordmed-3d2b5",
  storageBucket: "affordmed-3d2b5.appspot.com",
  messagingSenderId: "653114574334",
  appId: "1:653114574334:web:d2ea01ccd25def79b52caf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
