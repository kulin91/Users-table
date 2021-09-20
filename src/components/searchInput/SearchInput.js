import './style.css';
import React from 'react';
import Select from '../select/Select';

const textInput = React.createRef();

export default function SearchInput(props) {
  const { setValueSearchInput, allStates, setSelectedState, selectedState, pagination } = props;

  return (
    <div className="dataInputContainer">
      <span className="titleOfSearchInput">Search</span>
      <div className="boxForInput">
        <input
          ref={textInput}
          type="text"
          onChange={() => {
            setValueSearchInput(textInput.current.value);
            pagination.reset();
          }}
          className="entryField"
          placeholder=" Search..."
        />
        <Select
          allStates={allStates}
          setSelectedState={setSelectedState}
          selectedState={selectedState}
          pagination={pagination}
        />
      </div>
    </div>
  );
}
