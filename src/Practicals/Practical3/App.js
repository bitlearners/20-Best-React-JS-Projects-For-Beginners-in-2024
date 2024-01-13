
import React from 'react';
import './Style.css';

const App = () => {
  const itemList =["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Strawberry"];

  return (
    <div className="container">
      <h1>React List Display</h1>
      <h4>List of Items</h4>    
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
