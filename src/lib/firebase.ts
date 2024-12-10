import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBlHYGC8hbgTyAGwM2HnlcczZBvQNHGe04",
  authDomain: "ask-ai-93063.firebaseapp.com",
  projectId: "ask-ai-93063",
  storageBucket: "ask-ai-93063.firebasestorage.app",
  messagingSenderId: "179979556103",
  appId: "1:179979556103:web:aedccfd28df010470b21a2",
  measurementId: "G-WTQ0ZXZCVN",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };

