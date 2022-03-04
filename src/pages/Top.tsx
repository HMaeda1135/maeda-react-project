import React, { useContext, useEffect } from "react";
// import { withRouter, RouteComponentProps } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import LoginWithEmail from "../components/LoginWithEmail";
import LoginWithGoogle from "../components/LoginWithGoogle";
import SignupWithEmail from "../components/SignupWithEmail";
import { FirebaseContext } from "../contexts";
import paths from "../paths";

export const Top: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(FirebaseContext);

  useEffect(() => {
    // user && history.push(paths.home);
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

// export default withRouter(Top);
// export default Top;
