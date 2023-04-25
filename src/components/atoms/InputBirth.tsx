import React, { useState, ChangeEvent } from "react";

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
        onChange={handleDateChange}
      />
    </>
  );
};

export default InputBirth;