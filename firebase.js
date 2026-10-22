// Connects the demo to Firebase (database + login).
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpn8JK0SvKwnHAdiIEuiRI1hZXmy6V5Jc",
  authDomain: "homefinder-demo.firebaseapp.com",
  projectId: "homefinder-demo",
  storageBucket: "homefinder-demo.firebasestorage.app",
  messagingSenderId: "576493074851",
  appId: "1:576493074851:web:fa6551aa68cced0444c216"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
