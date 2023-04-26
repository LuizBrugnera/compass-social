import React from "react";

import "./LoginForm.css";
import { InputVerifiable } from "../molecules/InputVerifiable";
import ButtonSubmitLogin from "../molecules/ButtonSubmitLogin";

const LoginForm = () => {

  const elementList = [
    {className: "user", message: "Insira o usuário"},
    {className: "password", message: "Insira a senha"}
  ];

  return (
    <div className="conteiner_login">
      <h2 className="form-title">Registro</h2>

      <form className="form">
        <div>
          <InputVerifiable
          className="form-input user"
          message="Insira o usuário"
          type="text"
          placeholder="Nome"
          />
          <span className="input-name"></span>

          <InputVerifiable
          className="form-input password"
          message="Insira a senha"
          type="password"
          placeholder="Senha"
          />
          <span className="input-password"></span>
        </div>
        <span className="error-warning"></span>
        <span className="success-warning"></span>
        
        <ButtonSubmitLogin className="btn-register" elementList={elementList}>Logar-se</ButtonSubmitLogin>
      </form>
      <p className="p-form">
        Novo por aqui?
        <a href="/" className="a-register">
          {" "}
          Registre-se
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
