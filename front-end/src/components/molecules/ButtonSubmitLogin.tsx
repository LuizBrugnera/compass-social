import React from "react";
import { useNavigate} from "react-router-dom";
//atoms
import { checkElementList } from "../atoms/checker";
/// auth provider
import { useAuth } from '../../security/AuthProvider';
// types
import { ButtonSubmitType } from "../types/ButtonSubmitType";
const ButtonSubmitLogin = ({
  children,
  className,
  id,
  elementList,
}: ButtonSubmitType) => {

  const { setToken, checkLogin } = useAuth();
  const navigate = useNavigate();

  const handlerSubmitLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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

      if (userInput.value && passwordInput.value) {
        const token = await setToken(userInput.value, passwordInput.value);
        if (token) {
          sucessMessage.style.display = "flex";
          sucessMessage.innerHTML = "Login realizado com sucesso!";
          if (checkLogin()) navigate("/home");
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
