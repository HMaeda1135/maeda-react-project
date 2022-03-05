import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signupWithEmail } from "firebaseProvider";
import paths from "paths";

const SignupWithEmail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      await signupWithEmail(email.value, password.value);
      navigate(paths.home);
    },
    [location.pathname]
  );

  return (
    <>
      <div className="header-auth">
        <span>サインアップ</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="email" type="email" placeholder="Eメール" />
        </div>
        <div>
          <input name="password" type="password" placeholder="パスワード" />
        </div>
        <button type="submit">サインアップ</button>
      </form>
    </>
  );
};

export default SignupWithEmail;
