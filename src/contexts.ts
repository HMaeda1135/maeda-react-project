import React from "react";

type FirebaseContextType = {
  user: any | null | undefined;
};

export const FirebaseContext = React.createContext<FirebaseContextType>({
  user: null,
});
