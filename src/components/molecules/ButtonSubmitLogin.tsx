import React from "react";

import { ButtonSubmitType } from "./ButtonSubmitType";
import { checkElementList } from "../atoms/checker";

const ButtonSubmitLogin = ({
  children,
  className,
  id,
  elementList,
}: ButtonSubmitType) => {
    
  const handlerSubmitLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (checkElementList(elementList)) {
      const form = document.querySelector(".form")! as HTMLFormElement;
      const sucessMessage = document.querySelector(".success-warning")! as HTMLSpanElement;

      sucessMessage.style.display = "flex";
      sucessMessage.innerHTML = "Login realizado com sucesso!";

      form.reset();

        setTimeout(() => {
            sucessMessage.style.display = "none";
            //// send to social page
        }, 3000);
    }
  };

  return (
    <>
      <button
        type="submit"
        id={id}
        className={className}
        onClick={handlerSubmitLogin}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonSubmitLogin;
