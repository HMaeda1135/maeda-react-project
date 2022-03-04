import React, { useCallback } from "react";
// import { withRouter, RouteComponentProps } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { loginWithGoogle } from "../firebase";
import paths from "../paths";

const LoginWithGoogle: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      await loginWithGoogle();
      //   history.push(paths.home);
      navigate(paths.home);
    },
    [location.pathname]
  );

  return (
    <>
      <button onClick={handleSubmit} className="btn-google">
        Googleでログイン
      </button>
    </>
  );
};

// export default withRouter(LoginWithGoogle);
export default LoginWithGoogle;
