import React from 'react';

export default function Input(props) {
  const { label, inputValue } = props;
  function handleChange(e) {
    props.onChange(e.target.value);
  };
  return (
    <div className="input-wrapper">
      <div className="label-wrapper">
        <label htmlFor="input-box">{label}</label>
      </div>
      <input
        value={inputValue}
        onChange={handleChange}
        className="input-box"
        type="text"
      />
    </div>
  );
}
