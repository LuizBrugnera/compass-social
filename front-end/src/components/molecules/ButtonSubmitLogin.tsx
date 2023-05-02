import React from "react";
import { useNavigate } from 'react-router-dom';
//atoms
import { checkElementList } from "../atoms/checker";
// types
import { ButtonSubmitType } from "../types/ButtonSubmitType";
const ButtonSubmitLogin = ({
  children,
  className,
  id,
  elementList,
  userList,
}: ButtonSubmitType) => {
  const navigate = useNavigate();
  const handlerSubmitLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(userList) {
      console.log(userList)
      console.log(userList[0])
    }
    if (checkElementList(elementList)) {
      const form = document.querySelector(".form")! as HTMLFormElement;
      const sucessMessage = document.querySelector(
        ".success-warning"
      )! as HTMLSpanElement;
      const errorMessage = document.querySelector(
        ".error-warning"
      )! as HTMLSpanElement;
      const userInput = document.querySelector(".user")! as HTMLInputElement;
      const passwordInput = document.querySelector(".password")! as HTMLInputElement;
        
      if(userList) {
        console.log(userList);
        if (userList.find((user) => (user.user === userInput.value || user.email === userInput.value) && user.password === passwordInput.value)) {
          sucessMessage.style.display = "flex";
          sucessMessage.innerHTML = "Login realizado com sucesso!";
          navigate('/home');
        } else {
          errorMessage.style.display = "flex";
          errorMessage.innerHTML = "Usuário ou senha incorretos!";
        }
      } else {
        errorMessage.style.display = "flex";
        errorMessage.innerHTML = "Erro de conexão!";
      }

      form.reset();

      setTimeout(() => {
        sucessMessage.style.display = "none";
        errorMessage.style.display = "none";
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
