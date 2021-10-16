import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzg79XNHGifZ8Gcaw4__AvS6DFfHelzLc",
  authDomain: "instagramclone-97b32.firebaseapp.com",
  projectId: "instagramclone-97b32",
  storageBucket: "instagramclone-97b32.appspot.com",
  messagingSenderId: "410653921315",
  appId: "1:410653921315:web:5b32df630922a36d886196",
  measurementId: "G-VDKEP4SS72",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
