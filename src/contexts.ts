import React from "react";
import firebase from "firebase/app";

type FirebaseContextType = {
  user: any | null | undefined;
};

export const FirebaseContext = React.createContext<FirebaseContextType>({
  user: null,
});
