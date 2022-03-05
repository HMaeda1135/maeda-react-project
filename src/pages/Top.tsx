import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginWithEmail from "components/login/LoginWithEmail";
import LoginWithGoogle from "components/login/LoginWithGoogle";
import SignupWithEmail from "components/login/SignupWithEmail";
import { FirebaseContext } from "contexts";
import paths from "paths";

export const Top: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(FirebaseContext);

  useEffect(() => {
    console.log("top useeffect");
    console.log(user);
    user && navigate(paths.home);
  }, [location.pathname]);

  return (
    <div className="wrap-top">
      <div className="wrap-login">
        <div>
          <LoginWithEmail />
        </div>
        <hr />
        <div>
          <LoginWithGoogle />
        </div>
      </div>
      <div className="wrap-signup">
        <SignupWithEmail />
      </div>
    </div>
  );
};
