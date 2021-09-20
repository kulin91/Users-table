import './style.css';
import React from 'react';

export default function Select(props) {
  const { allStates, selectedState, setSelectedState, pagination } = props;
  const allStatesArray = Array.from(allStates);
  allStatesArray.unshift('All state');

  const handleChange = (e) => {
    pagination.reset();
    setSelectedState(e.target.value);
  };

  return (
    <div className="selectComponentContainer">
      <select className="select-css" value={selectedState} onChange={handleChange}>
        {allStatesArray.map((item, index) => (
          <option value={item} key={item + index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
