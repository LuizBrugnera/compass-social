import React, { useState, ChangeEvent } from "react";
import { checkInputNoRegex } from "./checker";

const InputBirth = (): JSX.Element => {
  const [date, setDate] = useState<string>('');

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setDate(event.target.value);
  };

  return (
    <>
      <input
        className="form-input birth"
        type="text"
        placeholder="Nascimento"
        onFocus={(event) => (event.target.type = "date")}
        onBlur={(event) => {
            if(event.target.value === '') event.target.type = 'text'
        }}
        id="date"
        value={date}
        onChange={(e) => {
          handleDateChange(e);
          checkInputNoRegex(e, "Preencha a sua data de nascimento!")
        }}
      />
    </>
  );
};

export default InputBirth;