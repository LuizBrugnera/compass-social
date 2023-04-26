import React from "react";

import "./SignupForm.css";
import InputBirth from "../atoms/InputBirth";
import { InputVerifiable } from "../molecules/InputVerifiable";

const SignupForm = () => {
  return (
    <div className="conteiner_signup">
      <h2 className="form-title">Registro</h2>

      <form className="form">
        <div>
          <InputVerifiable
          className="form-input name"
          message="Nome invalido"
          id="name"
          type="text"
          placeholder="Nome"
          regex={new RegExp("^[a-zA-Z]{2,}$")}
          />
          <span className="input-name"></span>

          <InputVerifiable
          className="form-input user"
          message="Nome de Usuário invalido"
          type="text"
          placeholder="Usuário"
          regex={new RegExp("^[a-zA-Z0-9_-]{4,}$")}
          />
          <span className="input-user"></span>

          <InputBirth />
          <span className="input-birth"></span>

          <InputVerifiable
          className="form-input email"
          message="Email invalido"
          type="email"
          placeholder="Email"
          regex={new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")}
          />
          <span className="input-email"></span>

          <InputVerifiable
          className="form-input password"
          message="Senha invalida"
          type="password"
          placeholder="Senha"
          regex={new RegExp("^(?=.*[A-Z])(?=.*\\d).{6,}$")}
          />
          <span className="input-password"></span>

          <InputVerifiable
          className="form-input cnfPassword"
          message="Senha invalida"
          type="password"
          placeholder="Senha"
          regex={new RegExp("^(?=.*[A-Z])(?=.*\\d).{6,}$")}
          />
          <span className="input-confirm-password"></span>
        </div>
        <span className="error-warning"></span>
        <span className="success-warning"></span>

        <button type="submit" className="btn-register">
          Registre-se
        </button>
      </form>
      <p className="p-form">
        Já possui uma conta?
        <a href="../login/index.html" className="a-login">
          {" "}
          Faça Login
        </a>
      </p>
    </div>
  );
};

export default SignupForm;
