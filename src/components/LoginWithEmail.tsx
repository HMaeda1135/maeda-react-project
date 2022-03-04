import React, { useCallback } from "react";
// import { withRouterk, RouteComponentProps } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { loginWithEmail } from "../firebase";
import paths from "../paths";

const LoginWithEmail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      await loginWithEmail(email.value, password.value);
      //   history.push(paths.home);
      navigate(paths.home);
    },
    [location.pathname]
  );

  return (
    <>
      <div className="header-auth">
        <span>ログイン</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="email" type="email" placeholder="Eメール" />
        </div>
        <div>
          <input name="password" type="password" placeholder="パスワード" />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </>
  );
};

// export default withRouter(LoginWithEmail);
export default LoginWithEmail;
