import React from "react";
import { useNavigate } from "react-router-dom";
// types
import { ButtonSubmitType } from "../types/ButtonSubmitType";
// atoms
import { checkElementList } from "../atoms/checker";
import { UserService } from "../services/UserService";

const ButtonSubmitSignup = ({
  children,
  className,
  id,
  elementList,
}: ButtonSubmitType) => {
  const navigate = useNavigate();
  const handlerSubmitForm = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (checkElementList(elementList)) {
      const form = document.querySelector(".form")! as HTMLFormElement;
      const sucessMessage = document.querySelector(
        ".success-warning"
      )! as HTMLSpanElement;

      const nameInput = document.querySelector(".name")! as HTMLInputElement;
      const userInput = document.querySelector(".user")! as HTMLInputElement;
      const birthInput = document.querySelector(".birth")! as HTMLInputElement;
      const emailInput = document.querySelector(".email")! as HTMLInputElement;
      const passwordInput = document.querySelector(
        ".password"
      )! as HTMLInputElement;

      const response = await UserService.createUser({
        name: nameInput.value,
        user: userInput.value,
        birthdate: birthInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      });

      if (response) {
        sucessMessage.style.display = "flex";
        sucessMessage.innerHTML = "Cadastro realizado com sucesso!";
      }

      form.reset();

      setTimeout(() => {
        sucessMessage.style.display = "none";
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <>
      <button
        type="submit"
        id={id}
        className={className}
        onClick={handlerSubmitForm}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonSubmitSignup;
