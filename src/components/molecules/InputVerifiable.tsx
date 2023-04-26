import React from "react";
/// types
import { InputType } from "./InputType";
/// atoms
import { checkInput, checkInputNoRegex, checkPasswordsEqual } from "../atoms/checker";

export const InputVerifiable = ({
  type,
  className,
  message,
  regex,
  placeholder,
  id,
  passwordEquals,
  passwordTarget
}: InputType) => {
  return (
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if(passwordEquals && passwordTarget && regex) {
                const tgtPass = document.querySelector(`.${passwordTarget}`)! as HTMLInputElement;
                checkPasswordsEqual(e, tgtPass, regex, message);
            } else
            regex ? checkInput(e, message, regex): checkInputNoRegex(e, message);
        }}
      />
    </>
  );
};
