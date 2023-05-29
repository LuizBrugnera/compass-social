import React, { useEffect } from "react";
// components
import LoginSignupLayout from "../components/templates/LoginSignupLayout";
import LoginForm from "../components/organisms/LoginForm";
import { useAuth } from "../security/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  let { checkLogin } = useAuth();
  useEffect(() => {
    if (checkLogin()) {
      navigate("/home");
    }
  }, []);

  return (
    <section id="login">
      <LoginSignupLayout text="Para continuar navegando de forma segura, efetue o login" styleContent="section-content" styleLogo="logo-mobile-login">
        <LoginForm />
      </LoginSignupLayout>
    </section>
  );
};

export default Login;
