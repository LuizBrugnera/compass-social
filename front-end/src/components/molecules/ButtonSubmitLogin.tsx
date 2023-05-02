import React from "react";
import { useNavigate} from "react-router-dom";
//atoms
import { checkElementList } from "../atoms/checker";
/// auth provider
import { useAuth } from '../../AuthProvider';
// types
import { ButtonSubmitType } from "../types/ButtonSubmitType";
const ButtonSubmitLogin = ({
  children,
  className,
  id,
  elementList,
  userList,
}: ButtonSubmitType) => {

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handlerSubmitLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
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
      const passwordInput = document.querySelector(
        ".password"
      )! as HTMLInputElement;

      console.log(userInput.value, passwordInput.value);

      if (userList) {
        const userFinded = userList.find(
          (user) =>
            (user.user === userInput.value ||
              user.email === userInput.value) &&
            user.password === passwordInput.value
        )
        if (userFinded) {

          signIn(userFinded);
          sucessMessage.style.display = "flex";
          sucessMessage.innerHTML = "Login realizado com sucesso!";
          navigate("/home");
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
