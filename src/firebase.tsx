import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { FirebaseContext } from "./contexts";

export const app: any = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

// const firebaseConfig: any = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

// export const app: any = initializeApp(firebaseConfig);

// export const auth = firebase.auth();

export const loginWithEmail = async (email: string, password: string) => {
  try {
    await app.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    alert(error);
  }
};

export const loginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await firebase.auth().signInWithPopup(provider);
  } catch (error) {
    alert(error);
  }
};

export const signupWithEmail = async (email: string, password: string) => {
  try {
    await app.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    alert(error);
  }
};

export const logout = () => {
  app.auth().signOut();
};

export const FirebaseProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user: any) => {
      setUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <div className="loading">ローディング中...</div>;
  }

  console.log("firebase.tsx");
  console.log(user);

  return (
    <FirebaseContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
