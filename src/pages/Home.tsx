import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";
import { FirebaseContext } from "../contexts";

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(FirebaseContext);
  console.log("Home");
  console.log(user);

  return (
    <>
      <header className="header-page">
        <h1>Home(要ログイン)</h1>
        <p>{user?.email}でログインしています。</p>
      </header>
      <div className="wrap-home">
        <button onClick={logout}>ログアウト</button>
        <button onClick={() => navigate("/")}>トップへ</button>
      </div>
    </>
  );
};

// export default Home;
