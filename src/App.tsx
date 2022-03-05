import { FirebaseProvider } from "firebaseProvider";
import { Router } from "route/router";
import "./App.css";

function App() {
  return (
    <FirebaseProvider>
      <Router />
    </FirebaseProvider>
  );
}

export default App;
