import { elementListType } from "../types/ButtonSubmitType";

function check(event: React.ChangeEvent<HTMLInputElement>, regex: RegExp) {
  return regex.test((event.target as HTMLInputElement).value);
}

function setCustomValidity(inputElement: HTMLInputElement, message: string) {
  const errorElement = document.querySelector(
    ".error-warning"
  )! as HTMLSpanElement;

  errorElement.innerText = message;
  if (message) {
    errorElement.style.display = "flex";
    inputElement.classList.add("error-regex");
  } else {
    errorElement.style.display = "none";
    inputElement.classList.remove("error-regex");
  }
}

export function checkInput(
  event: React.ChangeEvent<HTMLInputElement>,
  message: string,
  regex: RegExp
) {
  if (!check(event, regex)) {
    setCustomValidity(event.target, message);
    return false;
  } else {
    setCustomValidity(event.target, "");
    return true;
  }
}

export function checkInputNoRegex(
  event: React.ChangeEvent<HTMLInputElement>,
  message: string
) {
  if (!event.target.value) {
    setCustomValidity(event.target, message);
  } else {
    setCustomValidity(event.target, "");
  }
}

///

export function checkPasswordsEqual(
  event: React.ChangeEvent<HTMLInputElement>,
  password2: HTMLInputElement,
  regex: RegExp,
  message: string
) {
  const password1 = event.target;

  if (checkInput(event, message, regex)) {
    if (password1.value.length > 0 && password2.value.length > 0) {
      if (password1.value !== password2.value) {
        setCustomValidity(password2, "As senhas não correspondem!");

        return false;
      }
      setCustomValidity(password1, "");
      setCustomValidity(password2, "");
      return true;
    }
  }
}

export function checkElementList(elementList: elementListType[]) {
  let valid = true;

  elementList.forEach((element) => {
    const inputElement = document.querySelector(
      `.${element.className}`
    )! as HTMLInputElement;

    if (inputElement.value.length === 0) {
      valid = false;
      setCustomValidity(inputElement, "Preencha Todos os Campos!");
    } else if (element.regex) {
      if (!element.regex.test(inputElement.value)) {
        setCustomValidity(inputElement, element.message);
        valid = false;
      }
    }
  });

  return valid;
}
