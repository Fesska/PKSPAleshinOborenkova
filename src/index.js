import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMdEv10zEIDCzFdUjj71exFT1BwOeZgtg",
  authDomain: "student-schedule-db497.firebaseapp.com",
  databaseURL:
    "https://student-schedule-db497-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "student-schedule-db497",
  storageBucket: "student-schedule-db497.appspot.com",
  messagingSenderId: "540663596785",
  appId: "1:540663596785:web:713422c8ba6bcf97b08b50",
  measurementId: "G-EPJEC9219H",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const context = createContext();

export default context;

function Main() {
  const [userRights, setUserRights] = useState(false);
  const [userAuth] = useAuthState(auth);

  // Запрашиваем права пользователя
  const getRights = async () => {
    if (userAuth) {
      const usersCollectionRef = collection(db, "users");

      // Запрашиваем пользователя из коллекции users по совпадению поля UID
      const q = query(
        usersCollectionRef,
        where("UID", "==", auth.currentUser.uid)
      );

      const data = await getDocs(q);
      const userRef = data.docs.pop().data();
      const rights = userRef.rights;

      if (rights === "admin") setUserRights(true);
    }
  };

  getRights();

  return (
    <React.StrictMode>
      <context.Provider value={{ auth, db, userRights, setUserRights }}>
        <App />
      </context.Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
