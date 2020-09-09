import React, { useState } from 'react';
function Form(props) {
  const [formInput, setFormInput] = useState('');
  const { change, changeTemp, system } = props;

  function handeChange(event) {
    const { value } = event.target;
    setFormInput(value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    change(formInput);
    setFormInput('');
  }

  function farToC() {
    system === 'F' ? changeTemp('C') : changeTemp('F');
  }
  return (
    <div className="formBar">
      <button type="button" onClick={farToC} style={{ height: '100%' }}>
        {system}°
      </button>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'inline-block', height: '100%' }}
      >
        <input
          type="text"
          placeholder="Enter city name here..."
          value={formInput}
          onChange={handeChange}
        />
        <button type="submit" style={{ height: '100%' }}>
          submit
        </button>
      </form>
    </div>
  );
}
export default Form;
