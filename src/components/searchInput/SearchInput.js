import './style.css';
import React from 'react';

const textInput = React.createRef();

export default function SearchInput(props) {
  const { setValueSearchInput } = props;

  return (
    <div className="dataInputContainer">
      <span className="titleOfSearchInput">Search</span>
      <div className="boxForInput">
        <input
          ref={textInput}
          type="text"
          onChange={() => setValueSearchInput(textInput.current.value)}
          className="entryField"
          placeholder=" Search..."
        />
      </div>
    </div>
  );
}
