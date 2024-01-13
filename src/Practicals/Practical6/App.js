import React, { useState } from 'react';
import './Style.css';

const Checklist = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'Sony', 'Toshiba', 'MSI'];

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="checklist-container">
      <h2>Checklist</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <div className="selected-options">
        <h3>Selected Options:</h3>
        <ul>
          {selectedOptions.map((selected, index) => (
            <li key={index}>{selected}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Checklist;
