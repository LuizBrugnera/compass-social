import React from "react";
/// types
import { InputType } from "./InputType";
/// atoms
import { checkInput, checkInputNoRegex } from "../atoms/checker";

export const InputVerifiable = ({
  type,
  className,
  message,
  regex,
  placeholder,
  id,
}: InputType) => {
  return (
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          regex ? checkInput(e, message, regex): checkInputNoRegex(e, message);
        }}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
            regex ? checkInput(e, message, regex): checkInputNoRegex(e, message);
          }}
      />
    </>
  );
};
