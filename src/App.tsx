import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirebaseProvider } from "./firebase";
import PrivateRoute from "./PrivateRoute";
import { Top } from "./pages/Top";
import { Home } from "./pages/Home";
import paths from "./paths";
import "./App.css";

function App() {
  return (
    <FirebaseProvider>
      <BrowserRouter>
        <Routes>
          {/* <div> */}
          <Route path={paths.top} element={<Top />} />
          <Route path={paths.home} element={<Home />} />
          {/* <PrivateRoute path={paths.home} element={<Home />}>
            <Route element={paths.top} />
          </PrivateRoute> */}
          {/* </div> */}
        </Routes>
      </BrowserRouter>
    </FirebaseProvider>
  );
}

export default App;
