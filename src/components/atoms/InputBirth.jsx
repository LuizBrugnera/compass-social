import React from "react";

const InputBirth = () => {
  const [date, setDate] = React.useState('');

  const handleDateChange = (event) => {
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
