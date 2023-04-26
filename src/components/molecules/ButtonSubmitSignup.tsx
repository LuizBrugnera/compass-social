import React from "react";

import { ButtonSubmitType } from "./ButtonSubmitType";
import { checkElementList } from "../atoms/checker";

const ButtonSubmitSignup = ({
  children,
  className,
  id,
  elementList,
}: ButtonSubmitType) => {
  const handlerSubmitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (checkElementList(elementList)) {
      const form = document.querySelector(".form")! as HTMLFormElement;
      const sucessMessage = document.querySelector(".success-warning")! as HTMLSpanElement;

      sucessMessage.style.display = "flex";
      sucessMessage.innerHTML = "Cadastro realizado com sucesso!";

      form.reset();

        setTimeout(() => {
            sucessMessage.style.display = "none";
            //// send to login page
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