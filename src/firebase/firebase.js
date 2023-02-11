
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJRKeDtkanIs7HuJ71JBi5ea7XS-Ww-ZY",
  authDomain: "e-commerce-31aa2.firebaseapp.com",
  databaseURL: "https://e-commerce-31aa2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "e-commerce-31aa2",
  storageBucket: "e-commerce-31aa2.appspot.com",
  messagingSenderId: "940836232977",
  appId: "1:940836232977:web:9c6848306799a1522b36b0"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);

export default app;