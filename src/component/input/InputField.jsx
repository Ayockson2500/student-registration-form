import React from "react";

const InputField = ({
  type,
  name,
  placeholder,
  id,
  label,
  className,
  value,
  onChange,
  error,
  errorMessage,
  required,
}) => {
  return (
    <div>
      <label htmlFor="" className="text-RfGray2 text-md">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        id={id}
        required={required}
      />
      {error && <p className="text-RfOrange text-xs">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
