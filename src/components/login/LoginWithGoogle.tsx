import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginWithGoogle } from "firebaseProvider";
import paths from "paths";

const LoginWithGoogle: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      await loginWithGoogle();
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

export default LoginWithGoogle;
