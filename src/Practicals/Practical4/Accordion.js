import React, { useState } from 'react';
import './Style.css';

const Accordion = ({ title, content }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className='container'>
    <div className={`accordion ${isExpanded ? 'expanded' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`icon ${isExpanded ? 'expanded' : ''}`}></span>
      </div>
      {isExpanded && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Accordion;
