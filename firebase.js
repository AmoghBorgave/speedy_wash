import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjJvA-0s9c02Fc5XaDm5H9Ei0D7bQDwEM",
  authDomain: "speedy-wash.firebaseapp.com",
  projectId: "speedy-wash",
  storageBucket: "speedy-wash.appspot.com",
  messagingSenderId: "91242834659",
  appId: "1:91242834659:web:b5e89a17c1bd41ad9af3d6",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
