import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArrRoSJypwX8M3Teek99fG21dP5HA2QGw",
  authDomain: "ayushtvachaai.firebaseapp.com",
  databaseURL: "https://ayushtvachaai-default-rtdb.firebaseio.com",
  projectId: "ayushtvachaai",
  storageBucket: "ayushtvachaai.appspot.com",
  messagingSenderId: "947480971983",
  appId: "1:947480971983:web:97d944ab9cd8516f0845ba"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
