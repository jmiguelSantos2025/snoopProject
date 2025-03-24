


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBBVI7UBqTGwYqWHGPl7l19izTnyldrvXI",
  authDomain: "snoop-cb782.firebaseapp.com",
  projectId: "snoop-cb782",
  storageBucket: "snoop-cb782.firebasestorage.app",
  messagingSenderId: "463486613798",
  appId: "1:463486613798:web:c53438f8b40144459be9e7",
  measurementId: "G-FJJ8WKQ1SK"
};


const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const realtimeDatabase = getDatabase(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { app, firestore, realtimeDatabase, auth, analytics };
