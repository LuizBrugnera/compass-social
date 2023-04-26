import React from "react";

import "./SignupForm.css";
import InputBirth from "../atoms/InputBirth";
import { InputVerifiable } from "../molecules/InputVerifiable";
import ButtonSubmit from "../molecules/ButtonSubmitSignup";

const SignupForm = () => {
  const elementSubmitList = [
    {
      className: "name",
      message: "O nome deve ser maior que 2 caracteres e conter apenas letras!",
      regex: new RegExp("^[a-zA-Z]{2,}$"),
    },
    {
      className: "user",
      message:
        "O usuário deve conter apenas letras, números, _ e - e ter no mínimo 4 caracteres!",
      regex: new RegExp("^[a-zA-Z0-9_-]{4,}$"),
    },
    {
      className: "birth",
      message: "Preencha a sua data de nascimento!",
    },
    {
      className: "email",
      message: "Insira um email válido!",
      regex: new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"),
    },
    {
      className: "password",
      message:
        "A senha deve conter no mínimo 6 caracteres, uma letra maiúscula e um número!",
      regex: new RegExp("^(?=.*[A-Z])(?=.*\\d).{6,}$"),
    },
    {
      className: "cnfPassword",
      message:
        "A senha deve conter no mínimo 6 caracteres, uma letra maiúscula e um número!",
      regex: new RegExp("^(?=.*[A-Z])(?=.*\\d).{6,}$"),
    },
  ];

  return (
    <div className="conteiner_signup">
      <h2 className="form-title">Registro</h2>

      <form className="form">
        <div>
          <InputVerifiable
            className="form-input name"
            message="O nome deve ser maior que 2 caracteres e conter apenas letras!"
            id="name"
            type="text"
            placeholder="Nome"
            regex={new RegExp("^[a-zA-Z]{2,}$")}
          />
          <span className="input-name"></span>

          <InputVerifiable
            className="form-input user"
            message="O usuário deve conter apenas letras, números, _ e - e ter no mínimo 4 caracteres!"
            type="text"
            placeholder="Usuário"
            regex={new RegExp("^[a-zA-Z0-9_-]{4,}$")}
          />
          <span className="input-user"></span>

          <InputBirth />
          <span className="input-birth"></span>

          <InputVerifiable
            className="form-input email"
            message="Email inválido"
            type="email"
            placeholder="Email"
            regex={new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")}
          />
          <span className="input-email"></span>

          <InputVerifiable
            className="form-input password"
            message="A senha deve conter no mínimo 6 caracteres, uma letra maiúscula e um número!"
            type="password"
            placeholder="Senha"
            regex={new RegExp("^(?=.*[A-Z])(?=.*\\d).{6,}$")}
            passwordEquals={true}
            passwordTarget="cnfPassword"
          />
          <span className="input-password"></span>

          <InputVerifiable
            className="form-input cnfPassword"
            message="A senha deve conter no mínimo 6 caracteres, uma letra maiúscula e um número!"
            type="password"
            placeholder="Confirmar Senha"
            regex={new RegExp("^(?=.*[A-Z])(?=.*\\d).{6,}$")}
            passwordEquals={true}
            passwordTarget="password"
          />
          <span className="input-confirm-password"></span>
        </div>
        <span className="error-warning"></span>
        <span className="success-warning"></span>

        <ButtonSubmit className="btn-register" elementList={elementSubmitList}>Registre-se</ButtonSubmit>
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
