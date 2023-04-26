function check(event: React.ChangeEvent<HTMLInputElement>, regex: RegExp) {
  return regex.test((event.target as HTMLInputElement).value);
}

function setCustomValidity(inputElement: HTMLInputElement, message: string) {
  const errorElement = document.querySelector(
    ".error-warning"
  )! as HTMLSpanElement;

  errorElement.innerText = message;
  if(message) {
    errorElement.style.display = "flex";
    inputElement.classList.add("error-regex");
  } else {
    errorElement.style.display = "none";
    inputElement.classList.remove("error-regex");
  }
}

export function checkInput(event: React.ChangeEvent<HTMLInputElement>, message: string, regex: RegExp) {
  if (!check(event, regex)) {
    setCustomValidity(event.target, message);
  } else {
    setCustomValidity(event.target, "");
  }
}

export function checkInputNoRegex(event: React.ChangeEvent<HTMLInputElement>, message: string) {
  if (!event.target.value) {
    setCustomValidity(event.target, message);
  } else {
    setCustomValidity(event.target, "");
  }
}