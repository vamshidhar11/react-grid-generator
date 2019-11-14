import React from 'react';

export default function Input(props) {
  let style = {
    border: '1px solid #2c666e',
    backgroundColor: '#fff',
    padding: '5px',
    font: '24px Lato, Arial, sans-serif',
    color: '#2c666e',
    borderRadius: '2px',
    boxSizing: 'border-box',
    letterSpacing: '1px',
    textAlign: 'center'
  }
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
        style={style}
        type="text"
      />
    </div>
  );
}
